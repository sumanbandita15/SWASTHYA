'use strict';

const express = require('express');
const mongoose = require('mongoose');

const Record = require('../models/record');

const router = express.Router();
const passport = require('passport');
// Protect endpoints using JWT Strategy
router.use('/', passport.authenticate('jwt', { session: false, failWithError: true }));
/* ========== GET/READ ALL CATEGORIES FOR A USERID ========== */
router.get('/', (req, res, next) => {   
  const {category, limit, userId} = req.query;
  //const userId = req.query.userId;     

  if (!mongoose.Types.ObjectId.isValid(userId)) {
    const err = new Error('The `id` is not valid');
    err.status = 400;
    return next(err);
  }

  let filter = {userId};
  let numberOfRecords = 7;

  if(category){
    filter.category = category;
  }

  if(limit){
    numberOfRecords = limit;
  }

  Record.find(filter).limit(numberOfRecords)
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


module.exports = router;