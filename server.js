
const express = require('express');



// Setup express.
const app = express();

app.use(express.static(__dirname + '/dist'));

// Main entry point.
app.get('*', function(req, res) {
	// load the main page!
	res.sendFile(__dirname + '/dist/index.html'); 
});

// Start server.
app.listen(8080);
console.log("Braunian Noise - Listening on port 8080");