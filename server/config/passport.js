const GoogleStratgy = require('passport-google-oauth20');
const moongose = require('mongoose');
const User = require('../models/UserModel');

module.exports = function (passport) {
  passport.use(
    new GoogleStratgy(
      {
        clientID:
          '920146011440-2som4b9al73g4gesg373a1k7fbt6mno7.apps.googleusercontent.com',
        clientSecret: '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',
        callbackURL: '/auth/google/callback',
      },
      async (accessToken, refreshToken, profile, done) => {
        console.log(profile);
      }
    )
  );
  passport.serializeUser((user, done) => {
    done(null, user.id);
  });
  passport.deserializeUser((id, done) => {
    User.findById(id, function (err, user) {
      done(err, user);
    });
  });
};
