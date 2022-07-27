const mongoose = require('mongoose');
const uri =
  'mongodb+srv://Pewompa:Dhak9898@cluster0.zgefwyg.mongodb.net/soloProject?retryWrites=true&w=majority';
const connectDB = async () => {
  try {
    await mongoose.connect(uri);
    console.log('connected to db');
  } catch (error) {
    console.log(error);
  }
};
module.exports = connectDB;
