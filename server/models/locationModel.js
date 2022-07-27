const mongoose = require('mongoose');
const locationSchema = new mongoose.Schema({
  title: String,
});
const LocationModel = mongoose.model('locations', locationSchema);
module.exports = LocationModel;
