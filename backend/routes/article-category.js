
ArticleCategory = require('../models/article-category');

is_logged_in = require('../helper/is_logged_in');

module.exports = function(app) {

  // Retrieve article category.
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
  );

  // Save article category.
  app.post('/api/article_category', 
    is_logged_in,
    (req, res) => {

      var category = req.body;

      // Check if the category already exists.
      ArticleCategory.findById(category._id,
        (err, found_category) => {
          if(err) {
            console.log(err);

            res.status(400).send({message: 'An error occured.'});
          }				

          if(found_category) {
            // Save over existing category.
            console.log(found_category);
            ArticleCategory.findByIdAndUpdate(found_category._id, category, 
              (error, response) => {
                if(error) {
                  res.status(400).send({message: 'an error occured.'});
                }
                else {
                  res.status(200).send({message: 'Article category succesfuly updated.'});
                }
            })
          }
          else {
            // Save new category.
            let new_category = new ArticleCategory(category);
            new_category.save();

            res.status(201).send({message: 'Article category succesfuly added.'});
          }
      });
  });

  // Delete article category.
  app.delete('/api/article_category',
    (req, res) => {
      let id = req.query.id;
      ArticleCategory.findByIdAndRemove(id).then(
        response => res.status(200).send(response),
        error => res.status(400).send(error)
      )
    }
  );

  return app;
}
