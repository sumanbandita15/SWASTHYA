'use strict';

const express = require('express');
const mongoose = require('mongoose');

const Graph = require('../models/record');

const router = express.Router();

router.get('/',(req,res,next) => {
  const userId = req.query.userId;
  let coordinates = [
    {x: '26-7', y: 8},
    {x: '28-7', y: 5},
    {x: '29-7', y: 4},
    {x: '30-7', y: 9},
    {x: '1-8', y: 1},
    {x: '2-8', y: 7},
    {x: '3-8', y: 6},
    {x: '4-8', y: 3},
    {x: '5-8', y: 2},
    {x: '6-8', y: 0}
  ];
  res.json({coordinates});
});

module.exports = router;