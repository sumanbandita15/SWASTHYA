'use strict';

const express = require('express');
const mongoose = require('mongoose');

const Graph = require('../models/record');

const router = express.Router();
const passport = require('passport');
// Protect endpoints using JWT Strategy
router.use('/', passport.authenticate('jwt', { session: false, failWithError: true }));

router.get('/',(req,res,next) => {
  const userId = req.user.userId;
  if (!mongoose.Types.ObjectId.isValid(userId)) {
    const err = new Error('The `id` is not valid');
    err.status = 400;
    return next(err);
  }
  // Graph.find({userId})
  //   .then(result => {
  //     if (result) {
  //       console.log(result.createdAt);
  //       let coordinates = result.map(item => ({ x: item.createdAt.toString().substring(4,10), y: item.rating }));
  //       console.log(coordinates);
  //       res.json(coordinates);
  //     } else {
  //       next();
  //     }
  //   })
  //   .catch(err => {
  //     next(err);
  //   });
  let coordinates = [
    {x: '26-7', y: 80},
    {x: '28-7', y: 55},
    {x: '29-7', y: 40},
    {x: '30-7', y: 90},
    {x: '1-8', y: 100},
    {x: '2-8', y: 70},
    {x: '3-8', y: 60},
    {x: '4-8', y: 30},
    {x: '5-8', y: 20},
    {x: '6-8', y: 0}
  ];
  res.json({coordinates});
});

module.exports = router;