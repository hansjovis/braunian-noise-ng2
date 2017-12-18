
// Middleware.
const express = require('express');
// Connection with MongoDB.
const mongoose = require('mongoose');
// Authentication. 
const passport = require('passport');				
const LocalStrategy = require('passport-local');
// For encrypting and decrypting strings (e.g. passwords).
const bcrypt = require('bcrypt-nodejs');
// Pull information from HTML POST.
const bodyParser = require('body-parser'); 			

// Setup Mongoose.
const DB_URI = 'mongodb://localhost:27017/braunian-noise';
const MONGOOSE_OPTIONS = {
  useMongoClient: true
};

mongoose.Promise = require('bluebird');

var db_connection = mongoose.connect(DB_URI, MONGOOSE_OPTIONS); 

db_connection.then((db) => {
  console.log('Braunian Noise: Connection with DB.')
});

// Setup Passport.
passport.serializeUser(function(user, done) {
	done(null, user.id);
});

passport.deserializeUser(function(id, done) {
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

// Setup Express.
const app = express();
app.use(express.static(__dirname + '/dist'));

app.use(passport.initialize());
app.use(passport.session());

app.use(bodyParser.urlencoded({extended:'true', limit: '50mb'}));            	// parse application/x-www-form-urlencoded
app.use(bodyParser.json({limit: '50mb'}));                                     // parse application/json
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json

// Main entry point.
app.get('*', function(req, res) {
	// load the main page!
	res.sendFile(__dirname + '/dist/index.html'); 
});

// Routes.

// Login route
app.post('/api/login',	
	function(req, res) {
    console.log(req.body);
  }
);

// Start server.
app.listen(8080);
console.log("Braunian Noise: Ready to Rumble! - Listening on port 8080.");