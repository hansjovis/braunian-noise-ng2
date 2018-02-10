
// Middleware.
const express = require('express');
const session = require('express-session');
// Connection with MongoDB.
const mongoose = require('mongoose');
// Authentication. 
const passport = require('passport');				
const LocalStrategy = require('passport-local');
// For encrypting and decrypting strings (e.g. passwords).
const bcrypt = require('bcrypt-nodejs');
// Pull information from HTML POST.
const bodyParser = require('body-parser');

const path = require('path');

// Import Mongoose models;
const User = require('./backend/models/user-model'); 		
const ArticleCategory = require('./backend/models/article-category-model'); 	

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

// Setup Express.
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

app.use(bodyParser.urlencoded({extended:'true', limit: '50mb'}));            	// parse application/x-www-form-urlencoded
app.use(bodyParser.json({limit: '50mb'}));                                     // parse application/json
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json

/**
 *	Transforms the given user into a user profile,
 *	that can be sent to the browser.
 */
var get_profile = function(user) {
	
	return {
		id: user._id,
		username: user.username,
		screenname: user.screenname
	}
}

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

// Route middleware function that checks whether the user has logged in.
var is_logged_in = function(req, res, next) {
	
	if(req.isAuthenticated()) {
		return next();
	}
	else {
		res.status(401).send('You need to be logged in.');
	}
}

// Logout route.
app.post('/api/logout', function(req, res) {
  	console.log(`Braunian Noise: User logged out.`);
	req.logout();  
	res.status(200).send({text: 'Successfully logged out!'});
});

// Save category route.
app.post('/api/article_category', 
	is_logged_in,
	(req, res) => {

		var category = req.body;

		// Check if the category already exists.
		ArticleCategory.findById(category.id,
			(err, found_category) => {
				if(err) {
					console.log(err);

					res.status(400).send({message: 'An error occured.'});
				}				

				if(found_category) {
					// Save over existing category.
					found_category = category;
					found_category.save();
					
					res.status(200).send({message: 'Article category succesfuly updated.'});
				}
				else{
					// Save new category.
					let new_category = new ArticleCategory(category);
					new_category.save();

					res.status(201).send({message: 'Article category succesfuly added.'});
				}
		});
});

// Retrieve category route.
app.get('/api/article_category',
	(req, res) => {
		// Find all article categories.
		ArticleCategory.find({}, (err, categories) => {
			if(err) {
				res.status(400).send(err);
			} else {
				res.status(200).send(categories);
			}
		});
	}
)

// Main entry point for serving the Angular app.
app.use(express.static(path.join(__dirname, 'dist')));
app.get('/*', (req, res) => {
	res.sendFile('index.html', {root: path.join(__dirname, 'dist')});
});

// Start server.
app.listen(8080);
console.log("Braunian Noise: Ready to Rumble! - Listening on port 8080.");