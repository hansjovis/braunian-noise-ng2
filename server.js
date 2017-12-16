
// Middleware.
const express = require('express');
// Connection with MongoDB.
const mongoose = require('mongoose');
// Authentication. 
const passport = require('passport');				
const LocalStrategy = require('passport-local');
// For encrypting and decrypting strings (e.g. passwords).
const bcrypt = require('bcrypt-nodejs');			

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

// Setup express.
const app = express();
app.use(express.static(__dirname + '/dist'));

app.use(passport.initialize());
app.use(passport.session());

// Main entry point.
app.get('*', function(req, res) {
	// load the main page!
	res.sendFile(__dirname + '/dist/index.html'); 
});

// Start server.
app.listen(8080);
console.log("Braunian Noise: Ready to Rumble! - Listening on port 8080.");