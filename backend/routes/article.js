
const Article = require('../models/article');

const is_logged_in = require('../helper/is_logged_in');

const fs = require('fs');
const path = require('path');

const PATH_TO_ARTICLE_UPLOADS = path.join('.', 'uploads', 'articles');

const ROWTYPES = {
  IMAGE: 'IMAGE',
  TEXT: 'TEXT'
};

/**
 * Creates the folder with the given path if it does not exist yet.
 * @param {String} dirPath path to the folder to check
 */
const mkdirSync = function (dirPath) {
  try {
    fs.mkdirSync(dirPath)
  } catch (err) {
    if (err.code !== 'EEXIST') throw err
  }
}

/**
 * Saves the given image in base-64 representation (e.g. `data:image;base64,...`)
 * to the given path.
 * @param {String} base64Image an image in base-64 representation
 * @param {String} path path where the image should be saved
 */
const writeImage = function(base64Image, path) {
  if (base64Image.match(/^data:image/)) {
    let data = base64Image.replace(/^data:image\/.*;base64,/, "");
    fs.writeFileSync(path, data, 'base64');
  }
  return path.replace('uploads', '').normalize();
}

/**
 * Generates a unique ID for the given article.
 * @param {Object} article the article to generate the ID for
 */
const generateArticleID = function(article) {

  let title = article.title.toLowerCase();
  // Delete all punctuation marks (non-word, non-space characters).
  title = title.replace(/[^\w\s]/g, '');
  // Replace spaces with '-'.
  title = title.replace(/\s/g, '-');

  return `${title}-${article.date}`; 
}

/**
 * Extracts all of the images from the given article and writes them
 * to disk.
 * @param {Object} article the article to extract and save the images from 
 * @returns {String[]} an array of paths to which the images are saved, in the order in which they are retrieved. (First image is header image).
 */
const writeImages = function(article) {

    // Generate article ID.
    let articleID = generateArticleID(article);

    let pathToUploads = path.join(PATH_TO_ARTICLE_UPLOADS, articleID);
    let pathToImages = path.join(pathToUploads, 'images');

    // Make / use directory with the given article ID.
    mkdirSync(pathToUploads);
    mkdirSync(pathToImages);
    
    // Write images to disk.
    let image_paths = [];

    // First: header image.
    let header_path = writeImage(article.header_img.src, path.join(pathToImages, `${articleID}-${article.header_img.fileName}`));
    image_paths.push(header_path);

    // Then: images in the content.
    let images = article.rows.filter(row => row.rowType === ROWTYPES.IMAGE);
    let paths = images.map(image => writeImage(image.src, path.join(pathToImages, `${articleID}-${image.fileName}`)));
    
    return image_paths.concat(paths);
}

/**
 * Saves the given article to the database.
 * 
 * @param {Article} article the article that needs to be saved
 */
const saveArticle = function(article) {

  // Check if the article already exists.
  Article.findById(article._id,
    (err, found_article) => {
      if(err) {
        throw err;
      }
      if(found_article) {
        // Save over existing article.
        console.log(found_article);
        Article.findByIdAndUpdate(found_article._id, article, 
          (error, response) => {
            if(error) {
              throw error;
            }
            else {
              return found_article._id;
            }
        })
      }
      else {
        // Save new article.
        try {
          let new_article = new Article(article);
          new_article.save((err, new_article) => {
            return new_article._id;
          });
        } catch (error) {
          throw error;
        }
      }
      
  });
}

module.exports = function(app) {

  // Save article
  app.post('/api/article', 
    is_logged_in,
    (req, res) => {

      console.log('article posted!');
      let article = req.body;

      // Write images to disk
      let image_paths = writeImages(article);
      console.log(image_paths);

      // Replace image data with URLs to the same images on disk.
      article.header_img.src = image_paths.shift();
      article.rows = article.rows.map((row, i) => {
        if (row.rowType === ROWTYPES.IMAGE) {
          row.src = image_paths.shift();
        }
        return row;
      });

      // Replace description with first 256 characters of the first text row.
      article.description = article.rows.find(row => row.rowType === ROWTYPES.TEXT)
        .textRaw.substring(0, 256);

      console.log(article);

      try {
        // Save article to DB.
        let id = saveArticle(article);
        res.status(200).send({message: 'Article successfuly added or updated.', id: id});
      } catch (error) {
        console.error(error);
        res.status(400).send({message: 'An error occurred during saving.'});
      }
    }
  );

  // Get article previews
  app.get('/api/article-preview',
    (req, res) => {

      let query = Article.find({}).select(['title', 'header_img', 'categories', 'description', 'author', 'date']);

      // Find all article categories.
      query.exec((err, articles) => {
        if(err) {
          res.status(400).send(err);
        } else {
          res.status(200).send(articles);
        }
      });

    }
  )

}