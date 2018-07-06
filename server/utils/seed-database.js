'use strict';

const mongoose = require('mongoose');

const { DATABASE_URL } = require('../config');

const Category = require('../models/category');
const Record = require('../models/record');
const User = require('../models/user');

const seedCategory = require('../db/seed/categories');
const seedRecord = require('../db/seed/records');
const seedUser = require('../db/seed/users');

console.log(`Connecting to mongodb at ${DATABASE_URL}`);
mongoose.connect(DATABASE_URL)
  .then(() => {
    console.info('Dropping Database');
    return mongoose.connection.db.dropDatabase();
  })
  .then(() => {
    console.info('Seeding Database');
    return Promise.all([
      User.insertMany(seedUser),      
      User.createIndexes(),
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
