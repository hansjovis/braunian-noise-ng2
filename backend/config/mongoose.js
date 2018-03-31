
const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');


const DB_URI = 'mongodb://localhost:27017/braunian-noise';

const MONGOOSE_OPTIONS = {
  useMongoClient: true
};

var database = mongoose.connect(DB_URI, MONGOOSE_OPTIONS); 

database.then((db) => {
  console.log('Braunian Noise: Connection with DB.')
});

module.exports = database;