const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  user: {type: String, required: true},
  publishedDate: {type: Date, required: true},
  updated: {type: Date},
  status: {type: String},
  title: {type: String, required: true},
  content: {type: String, required: true},
  photo: {type: String},
  price: {type: Number},
  phone: {type: String},
  localization: {type: String},
});

module.exports = mongoose.model('Post', postSchema);
