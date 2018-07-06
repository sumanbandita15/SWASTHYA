'use strict';

const express = require('express');
const passport = require('passport');
const jwt = require('jsonwebtoken');

const {JWT_SECRET, JWT_EXPIRY} = require('../config');

const router = express.Router();

function createAuthToken(user){
  return jwt.sign({user},JWT_SECRET,{
    subject: user.email,
    expiresIn: JWT_EXPIRY
  });
}

const localAuth = passport.authenticate('local', {session: false, failWithError: true});

router.post('/login', localAuth, (req, res) => {
  console.log('login');
  const authToken = createAuthToken(req.user);
  res.json({ authToken });
});

const jwtAuth = passport.authenticate('jwt', { session: false, failWithError: true });

router.post('/refresh', jwtAuth, (req, res) => {
  const authToken = createAuthToken(req.user);
  res.json({ authToken });
});

module.exports = router;
