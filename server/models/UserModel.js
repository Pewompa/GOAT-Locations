const mongoose = require('mongoose');

const IdSchema = new mongoose.Schema({
  googleId: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  score: {
    type: Number,
    default: 0,
  },
});
const IdModel = mongoose.model('ids', IdSchema);
module.exports = IdModel;
