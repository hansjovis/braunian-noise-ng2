
// Authentication. 
const passport = require('passport');				
const LocalStrategy = require('passport-local');
// For encrypting and decrypting strings (e.g. passwords).
const bcrypt = require('bcrypt-nodejs');

const User = require('../models/user');

passport.serializeUser(function(user, done) {
  console.log(user._id);
  done(null, user._id);
});

passport.deserializeUser(function(id, done) {
  console.log(id);
  User.findById(id, function(err, user) {
        done(err, user);
    });
});

passport.use(new LocalStrategy(
  function(username, password, done) {
    // Try to find the user with the given username in the DB.
    User.findOne({ username: username }, 
    
      function (err, user) {				
        if (err) {
          // Error logging in.
          return done(err);
        }
        if (!user) {
          // Incorrect username.
          return done(null, false);
        }
        // Check password.
        bcrypt.compare(password, user.password, function(err, res) {
          
          if(res == true) {
            return done(null, user);
          }			
          else {
            return done(null, false);
          }	
                    
        })				
    });
  }
  ));

module.exports = passport;