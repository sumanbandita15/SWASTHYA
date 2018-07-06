'use strict';

const express = require('express');
const User = require('../models/user');

const router = express.Router();

/* ========== POST/CREATE AN USER ========== */
router.post('/', (req, res, next) => {

  const requiredFields = ['firstName','lastName','email', 'password'];

  const missingField = requiredFields.find(field => !(field in req.body));
  if (missingField) {
    const err = new Error(`Missing '${missingField}' in request body`);
    err.status = 422;
    return next(err);
  }

  const stringFields = ['email', 'password', 'firstName','lastName'];
  const nonStringField = stringFields.find(
    field => field in req.body && typeof req.body[field] !== 'string'
  );

  if (nonStringField) {
    const err = new Error(`Field: '${nonStringField}' must be type String`);
    err.status = 422;
    return next(err);
  }

  // If the email and password aren't trimmed we give an error. 
  const explicityTrimmedFields = ['email', 'password'];
  const nonTrimmedField = explicityTrimmedFields.find(
    field => req.body[field].trim() !== req.body[field]
  );

  if (nonTrimmedField) {
    const err = new Error(`Field: '${nonTrimmedField}' cannot start or end with whitespace`);
    err.status = 422;
    return next(err);
  }

  // bcrypt truncates after 72 characters
  const sizedFields = {
    email: { min: 1 },
    password: { min: 8, max: 72 }
  };

  const tooSmallField = Object.keys(sizedFields).find(
    field => 'min' in sizedFields[field] &&  //if min is a key in 'email'
      req.body[field].trim().length < sizedFields[field].min
  );
  if (tooSmallField) {
    const min = sizedFields[tooSmallField].min;
    const err = new Error(`Field: '${tooSmallField}' must be at least ${min} characters long`);
    err.status = 422;
    return next(err);
  }

  const tooLargeField = Object.keys(sizedFields).find(
    field => 'max' in sizedFields[field] &&
      req.body[field].trim().length > sizedFields[field].max
  );

  if (tooLargeField) {
    const max = sizedFields[tooLargeField].max;
    const err = new Error(`Field: '${tooLargeField}' must be at most ${max} characters long`);
    err.status = 422;
    return next(err);
  }

  // email and password were validated as pre-trimmed
  let { email, password, firstName = '',lastName = '' } = req.body;
  firstName = firstName.trim();
  lastName = lastName.trim();
  // Remove explicit hashPassword if using pre-save middleware
  return User.hashPassword(password)
    .then(digest => {
      const newUser = {
        email,
        password: digest,
        firstName,
        lastName
      };
      return User.create(newUser);
    })
    .then(result => {
      return res.status(201).location(`/api/users/${result.id}`).json(result);
    })
    .catch(err => {
      if (err.code === 11000) {
        err = new Error('The email already exists');
        err.status = 400;
      }
      next(err);
    });
});

module.exports = router;
