
const mongoose = require('mongoose');

// User.
var User = mongoose.model('User', {
	username: String,
	screenname: String,
	password: String
});

module.exports = User;