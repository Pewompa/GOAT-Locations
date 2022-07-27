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
