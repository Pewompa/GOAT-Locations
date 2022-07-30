const LocationModel = require('../models/locationModel');

async function getLocations(req, res) {
  try {
    const data = await LocationModel.find({}).sort({ score: -1 });
    res.status = 201;
    res.json(data);
  } catch (error) {
    res.status = 400;
  }
}

async function postLocations(req, res) {
  //Checking if the location is already in the db
  const { title } = req.body;
  const location = await LocationModel.findOne({ title: title });
  if (location) {
    location.score = location.score + 1;
    await location.save();
    return res.send(location);
  }
  try {
    const newEvent = new LocationModel({
      title: req.body.title,
      lat: req.body.lat,
      lng: req.body.lng,
      question: req.body.question,
    });
    await newEvent.save();
    res.status = 201;
    res.send(newEvent);
  } catch (error) {
    console.log(error);
    res.status = 400;
  }
}

module.exports = { getLocations, postLocations };
