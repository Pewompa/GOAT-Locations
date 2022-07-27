const LocationModel = require('../models/locationModel');

async function getLocations(req, res) {
  try {
    const data = await LocationModel.find({});
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
    // return res
    //   .status(409)
    //   .send({ error: '409', message: 'Location already exists' });
  }
  try {
    const newEvent = new LocationModel({
      title: req.body.title,
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
