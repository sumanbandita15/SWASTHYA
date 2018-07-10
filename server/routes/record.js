'use strict';

const express = require('express');
const mongoose = require('mongoose');

const Record = require('../models/record');

const router = express.Router();
const passport = require('passport');
// Protect endpoints using JWT Strategy
router.use('/', passport.authenticate('jwt', { session: false, failWithError: true }));
/* ========== GET RECORDS ========== */
router.get('/', (req, res, next) => {  
  const userId = req.user.userId;      
  if (!mongoose.Types.ObjectId.isValid(userId)) {
    const err = new Error('The `id` is not valid');
    err.status = 400;
    return next(err);
  }

  Record.find({userId})
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


/* ========== POST/CREATE RECORDS ========== */
router.post('/', (req, res, next) => {
  let { record } = req.body;
  const userId =  req.user.userId;

  const newRecord = {...record, userId};

  /***** Validating Inputs *****/
  if (!record) {
    const err = new Error('Missing `record` in request body');
    err.status = 400;
    return next(err);
  }

  if (userId && !mongoose.Types.ObjectId.isValid(userId)) {
    const err = new Error('The `userId` is not valid');
    err.status = 400;
    return next(err);
  }

  Record.create(newRecord)
    .then(result => {
      //res.location(`${req.originalUrl}/${result.id}`).status(201).json(result);
      //res.status(200).json(result);
      return   Record.find({userId}).then(result => {
        if (result) {
          res.json(result);
        } else {
          next();
        }
      }).catch(err => {
        next(err);
      })
    })
    .catch(err => {
      if (err.code === 11000) {
        err = new Error('Category already exists');
        err.status = 400;
      }
      next(err);
    });
});

// Delete an item
/* ========== DELETE/REMOVE A SINGLE ITEM ========== */
router.delete('/', (req, res, next) => {  
  const userId = req.user.id;
  const id = req.body._id;
  if (!mongoose.Types.ObjectId.isValid(userId)) {
    const err = new Error('The `userId` is not valid');
    err.status = 400;
    return next(err);
  }
  Record.findOneAndRemove({_id: id,userId})
    .then(() => {
     return Record.find({userId})
        .then(result => {
          if (result) {
            res.json(result);
          } else {
            next();
          }
        })       
    })
    .catch(err => {
      next(err);
    });
});
module.exports = router;