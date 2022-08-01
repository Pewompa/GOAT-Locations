const express = require('express');
const authRouter = express.Router();
const controller = require('../controllers/locationController');

authRouter.get('/locations', controller.getLocations);
authRouter.get('/locations/googleId', controller.getLocationsAuth);
authRouter.post('/locations', controller.postLocations);

module.exports = authRouter;
