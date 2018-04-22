
is_logged_in = require('../helper/is_logged_in');

module.exports = function(app) {

  // Save article
  app.post('/api/article', 
  is_logged_in,
  (req, res) => {

    console.log('article posted!');
    var article = req.body;

    console.log(article);

    res.status(200).send({message: 'Article succesfully added.'});
  });

}