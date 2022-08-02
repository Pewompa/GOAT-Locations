const express = require('express');
const authRouter = express.Router();
const controller = require('../controllers/userController');

authRouter.get('/googleId', controller.getId);

authRouter.post('/googleId', controller.postId);
authRouter.post('/googleId', controller.postId);
authRouter.delete('/googleId/remove', controller.removeCollection);
// authRouter.post('/googleId/remove', controller.removeId);

module.exports = authRouter;
