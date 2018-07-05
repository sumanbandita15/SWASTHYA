'use strict';

const mongoose = require('mongoose');

const recordSchema = new mongoose.Schema({
  categoryId: { type: mongoose.Schema.Types.ObjectId, ref: 'Category' },
  url: { type: String },//{type: mongoose.Schema.Types.Url},
  title: { type: String, required: true },
  rating: {type: Number, required: true},
  description: { type: String, required: true }  
});

// Add `createdAt` and `updatedAt` fields
recordSchema.set('timestamps', true);

recordSchema.set('toObject', {
  virtuals: true,     // include built-in virtual `id`
  versionKey: false,  // remove `__v` version key
  transform: (doc, ret) => {
    delete ret._id; // delete `_id`
  }
});

module.exports = mongoose.model('Record', recordSchema);
