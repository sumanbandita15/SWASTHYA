'use strict';

const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
  category: { type: String, required: true},
  userId: {type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true}
});

categorySchema.index({category: 1,userId: 1},{unique: true});

categorySchema.set('timestamps', true);

// Customize output 
categorySchema.set('toObject', {
  virtuals: true,     // include built-in virtual `id`
  versionKey: false,  // remove `__v` version key
  transform: (doc, ret) => {
    delete ret._id; // delete `_id`
  }
});

module.exports = mongoose.model('Category', categorySchema);

