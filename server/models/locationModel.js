const mongoose = require('mongoose');
const locationSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  score: {
    type: Number,
    default: 1,
  },
  lat: Number,
  lng: Number,
  question: String,
  googleId: String,
});
const LocationModel = mongoose.model('locations', locationSchema);
module.exports = LocationModel;
