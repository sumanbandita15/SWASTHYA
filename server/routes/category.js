'use strict';

const express = require('express');
const mongoose = require('mongoose');

const Category = require('../models/category');

const router = express.Router();

const passport = require('passport');
// Protect endpoints using JWT Strategy
router.use('/', passport.authenticate('jwt', { session: false, failWithError: true }));
/* ========== GET/READ ALL CATEGORIES FOR A USERID ========== */

router.get('/', (req, res, next) => {  
  const userId = req.user.userId;      
  if (!mongoose.Types.ObjectId.isValid(userId)) {
    const err = new Error('The `id` is not valid');
    err.status = 400;
    return next(err);
  }

  Category.find({userId})
    .then(result => {
      if (result) {
        res.json(result);
      } else {
        next();
      }
    })
    .catch(err => {
      next(err);
    });
});


/* ========== GET/READ A SINGLE CATEGORY FOR A USERID ========== */
router.get('/:id', (req, res, next) => {
  const { id } = req.params;
  const userId = req.query.userId;
  //const userId = req.user.id;
  
  if (!(mongoose.Types.ObjectId.isValid(id) || mongoose.Types.ObjectId.isValid(userId))){
    const err = new Error('The `id` is not valid');
    err.status = 400;
    return next(err);
  }

  Category.findOne({_id:id,userId})
    .then(result => {
      if (result) {
        res.json(result);
      } else {
        next();
      }
    })
    .catch(err => {
      next(err);
    });
});


/* ========== PUT/UPDATE A CATEGORY ========== */
router.put('/:id', (req, res, next) => {
  const { id } = req.params;
  const userId = req.query.userId;//req.user.id;
  const { category } = req.body;

  
  if (!mongoose.Types.ObjectId.isValid(id)) {
    const err = new Error('The `id` is not valid');
    err.status = 400;
    return next(err);
  }

  if (!category) {
    const err = new Error('Missing `category` in request body');
    err.status = 400;
    return next(err);
  }

  if (userId && !mongoose.Types.ObjectId.isValid(userId)) {
    const err = new Error('The `userId` is not valid');
    err.status = 400;
    return next(err);
  }

  const updateCategory = { category,userId };

  Category.findOneAndUpdate({_id:id,userId}, updateCategory, { new: true })
    .then(result => {
      if (result) {
        res.json(result);
      } else {
        next();
      }
    })
    .catch(err => {
      if (err.code === 11000) {
        err = new Error('Category name already exists');
        err.status = 400;
      }
      next(err);
    });
});


/* ========== POST/CREATE A CATEGORY ========== */
router.post('/', (req, res, next) => {
  const { category } = req.body;
  const userId = req.query.userId;//req.user.id;
  const newCategory = { category,userId };

  /***** Validating Inputs *****/
  if (!category) {
    const err = new Error('Missing `category` in request body');
    err.status = 400;
    return next(err);
  }

  if (userId && !mongoose.Types.ObjectId.isValid(userId)) {
    const err = new Error('The `userId` is not valid');
    err.status = 400;
    return next(err);
  }

  Category.create(newCategory)
    .then(result => {
      res.location(`${req.originalUrl}/${result.id}`).status(201).json(result);
    })
    .catch(err => {
      if (err.code === 11000) {
        err = new Error('Category category already exists');
        err.status = 400;
      }
      next(err);
    });
});

//Deleting Categories (Only allow user to delete a category that has no records) coming soon.... 

module.exports = router;