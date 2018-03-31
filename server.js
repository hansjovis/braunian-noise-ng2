
// Connection with MongoDB
const database = require('./backend/config/mongoose');

// Authentication.
const passport = require('./backend/config/passport');

// Middleware.
const express = require('express');

// Express application.
const app = require('./backend/config/express')(passport);

// Setup routes.
require('./backend/routes/article-category')(app);

const path = require('path');

const User = require('./backend/models/user'); 		

/**
 *	Transforms the given user into a user profile,
 *	that can be sent to the browser.
 */
var get_profile = user => ({
	id: user._id,
	username: user.username,
	screenname: user.screenname
});

// Routes.

// Login route.
app.post('/api/login',
  // authenticate using passport.
  passport.authenticate('local'),	
  function(req, res) {    
    if(req.user) {   

	  req.session.user = req.user;
      var user = get_profile(req.user);      
      
      console.log(`Braunian Noise: ${user.username} logged in.`);
               
      res.json(user);
    }
    else {
      res.status(401).send('Invalid username or password.');
    }
  }  
);



// Logout route.
app.post('/api/logout', function(req, res) {
  console.log(`Braunian Noise: User logged out.`);
	req.logout();  
	res.status(200).send({text: 'Successfully logged out!'});
});



// Main entry point for serving the Angular app.
app.use(express.static(path.join(__dirname, 'dist')));
app.get('/*', (req, res) => {
	res.sendFile('index.html', {root: path.join(__dirname, 'dist')});
});

// Start server.
app.listen(8080);
console.log("Braunian Noise: Ready to Rumble! - Listening on port 8080.");