'use strict';

const mongoose = require('mongoose');

const { DATABASE_URL } = require('../config');

const Category = require('../models/category');
const Record = require('../models/record');

const seedCategory = require('../db/seed/category');
const seedRecord = require('../db/seed/record');

console.log(`Connecting to mongodb at ${DATABASE_URL}`);
mongoose.connect(DATABASE_URL)
  .then(() => {
    console.info('Dropping Database');
    return mongoose.connection.db.dropDatabase();
  })
  .then(() => {
    console.info('Seeding Database');
    return Promise.all([
      Category.insertMany(seedCategory),      
      Category.createIndexes(),
      Record.insertMany(seedRecord),      
      Record.createIndexes()    
    ]);
  })
  .then(() => {
    console.info('Disconnecting');
    return mongoose.disconnect();
  })
  .catch(err => {
    console.error(err);
    return mongoose.disconnect();
  });
