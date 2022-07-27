const mongoose = require('mongoose');
const locationSchema = new mongoose.Schema({
  title: {
    type: String,
    // validate: {
    //   validator: function (v, cb) {
    //     Location.find({ title: v }, function (err, docs) {
    //       cb(docs.length == 0);
    //     });
    //   },
    //   message: 'User already exists!',
    // },
  },
  score: {
    type: Number,
    default: 0,
  },
});
const LocationModel = mongoose.model('locations', locationSchema);
module.exports = LocationModel;
