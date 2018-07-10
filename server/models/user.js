'use strict';

const bcrypt = require('bcryptjs');
const mongoose = require('mongoose');

// ===== Define UserSchema & UserModel =====
const userSchema = new mongoose.Schema({
  firstName: { type: String,required: true },
  lastName: { type: String,required: true},
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }
});

userSchema.set('toObject', {
  virtuals: true,     // include built-in virtual `id`
  versionKey: false,  // remove `__v` version key
  transform: (doc, ret) => {
    ret.userId = doc._id;
    delete ret._id; // delete `_id`
    delete ret.password;
  }
});

userSchema.methods.validatePassword = function (password) {
  return bcrypt.compare(password, this.password);
};

userSchema.statics.hashPassword = function (password) {
  return bcrypt.hash(password, 10);
};

module.exports = mongoose.model('User', userSchema);
