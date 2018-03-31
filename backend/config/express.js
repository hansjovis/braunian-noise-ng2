
// Middleware.
const express = require('express');
const session = require('express-session');

// Pull information from HTML POST.
const bodyParser = require('body-parser');

module.exports = function(passport) {

  const app = express();
  
  app.use(session({
    secret: 'display panther', 
    resave: false,
      saveUninitialized: true,
    cookie: { 
      maxAge: 60000 
    }
  }));

  app.use(passport.initialize());
  app.use(passport.session());

  app.use(bodyParser.urlencoded({extended:'true', limit: '50mb'}));   // parse application/x-www-form-urlencoded
  app.use(bodyParser.json({limit: '50mb'}));                          // parse application/json
  app.use(bodyParser.json({ type: 'application/vnd.api+json' }));     // parse application/vnd.api+json as json

  return app;
};
