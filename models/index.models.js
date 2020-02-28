const mongoose = require('mongoose');

const reviewSchema = mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  comment: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: new Date
  },
  image: String,
  rating: {
    type: Number,
    required: true
  }
})

module.exports = mongoose.model('data_user', reviewSchema);