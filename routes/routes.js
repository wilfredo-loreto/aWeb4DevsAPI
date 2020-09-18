'use strict'

// IMPORTS REQUIREDS
var express = require('express');
var ArticleController = require('../controllers/article.controller');
var TechController = require('../controllers/tech.controller');

var router = express.Router();

var multipart = require('connect-multiparty');

// CRUD ROUTES

/**
 * @api {get} /articles Gets all the articles
 * @apiVersion 0.1.0
 * @apiName getArticles
 * @apiGroup Article
 * 
 * @apiDescription Gets all the articles storeds in the DB (to be showed in aweb4devs.com/articles)
 * 
 * @apiSuccess {String} title The article's title
 * @apiSuccess {String} summary The article's title
 * @apiSuccess {String} img The Route of the image saved in the hosting
 * @apiSuccess {Date} date Release date of the article
 * @apiSuccess {Number} visits The number of article visits
*/
router.get('/articles',ArticleController.getArticles);

/**
 * @api {get} /article/:title Gets a single article
 * @apiVersion 0.1.0
 * @apiName getArticle
 * @apiGroup Article
 * 
 * @apiDescription Gets a single article storeds in the DB based on title (to be showed in aweb4devs.com/articles/currentArticle)
 * 
 * @apiParam {String} title The article title
 * 
 * @apiSuccess {String} title The article's title
 * @apiSuccess {String} type Front-end / Back-end / Mixed (Both)
 * @apiSuccess {String} summary The article's title
 * @apiSuccess {String} img The Route of the image saved in the hosting
 * @apiSuccess {Date} date Release date of the article
 * @apiSuccess {Array[Array[string]]} tags 2xN Matrix which have 2 Types of tags. Techonolgies[0] and Keywords[1] . Needed for aside and searchbar  
 * @apiSuccess {Array[String]} content An Array of paragraphs and routes of images to create an article
 * @apiSuccess {Number} visits The number of article visits
 * @apiSuccess {Array[Array[string]]} references 2xN Matrix (N=Qty of references) which have Link[0] and Name[1] of the page references (String). 
*/
 
router.get('/article/:title',ArticleController.getArticle);

/**
 * @api {get} /article/aside/:asideArticles Gets the Relationated Articles
 * @apiVersion 0.1.0
 * @apiName getAsideArticles
 * @apiGroup Article
 * 
 * @apiDescription Gets the Relationated Articles in the DB based on current tags array (to be showed in aweb4devs.com/articles/currentArticle)
 * 
 * @apiParam {String} asideArticles an array of technologies tags separated by "+"
 * 
 * @apiSuccess {String} title The article's title
*/
 
router.get('/article/aside/:asideArticles',ArticleController.getAsideArticles);

/**
 * @api {put} /article/:title Updates an article
 * @apiVersion 0.1.0
 * @apiName updateArticle
 * @apiGroup Article
 * 
 * @apiDescription Updates a single article stored in the DB (CRUD Operation)
 * 
 * @apiParam {String} title The article title
 * 
 * @apiSuccess {String} title The article's title
 * @apiSuccess {String} type Front-end / Back-end / Mixed (Both)
 * @apiSuccess {String} summary The article's title
 * @apiSuccess {String} img The Route of the image saved in the hosting
 * @apiSuccess {Date} date Release date of the article
 * @apiSuccess {Array[Array[string]]} tags 2xN Matrix which have 2 Types of tags. Techonolgies[0] and Keywords[1] . Needed for aside and searchbar  
 * @apiSuccess {Array[String]} content An Array of paragraphs and routes of images to create an article
 * @apiSuccess {Number} visits The number of article visits
 * @apiSuccess {Array[Array[string]]} references 2xN Matrix (N=Qty of references) which have Link[0] and Name[1] of the page references (String). 
*/
 
router.put('/article/:title',ArticleController.updateArticle);

/**
 * @api {post} /save-article Saves an article in the db
 * @apiVersion 0.1.0
 * @apiName saveArticle
 * @apiGroup Article
 * 
 * @apiDescription Saves a new article in the db (CRUD Operation)
 * 
 * @apiSuccess {String} title The article's title
 * @apiSuccess {String} type Front-end / Back-end / Mixed (Both)
 * @apiSuccess {String} summary The article's title
 * @apiSuccess {String} img The Route of the image saved in the hosting
 * @apiSuccess {Date} date Release date of the article
 * @apiSuccess {Array[Array[string]]} tags 2xN Matrix which have 2 Types of tags. Techonolgies[0] and Keywords[1] . Needed for aside and searchbar  
 * @apiSuccess {Array[String]} content An Array of paragraphs and routes of images to create an article
 * @apiSuccess {Number} visits The number of article visits
 * @apiSuccess {Array[Array[string]]} references 2xN Matrix (N=Qty of references) which have Link[0] and Name[1] of the page references (String). 
*/
 
router.post('/save-article',ArticleController.saveArticle);

/**
 * @api {delete} /delete-article Deletes an Article
 * @apiVersion 0.1.0
 * @apiName deleteArticle
 * @apiGroup Article
 * 
 * @apiDescription Delete a single article stored in the db (CRUD Operation)
 * 
 * @apiParam {String} title The article title
 * 
 * @apiSuccess {String} title The article's title
 * @apiSuccess {String} type Front-end / Back-end / Mixed (Both)
 * @apiSuccess {String} summary The article's title
 * @apiSuccess {String} img The Route of the image saved in the hosting
 * @apiSuccess {Date} date Release date of the article
 * @apiSuccess {Array[Array[string]]} tags 2xN Matrix which have 2 Types of tags. Techonolgies[0] and Keywords[1] . Needed for aside and searchbar  
 * @apiSuccess {Array[String]} content An Array of paragraphs and routes of images to create an article
 * @apiSuccess {Number} visits The number of article visits
 * @apiSuccess {Array[Array[string]]} references 2xN Matrix (N=Qty of references) which have Link[0] and Name[1] of the page references (String). 
*/
 
router.delete('/delete-article',ArticleController.deleteArticle);


router.get('/techs/:type',TechController.getTechs);
router.get('/aside-techs/:type',TechController.asideTechs);
router.get('/carousel-techs/:type',TechController.carouselTechs);
router.get('/search-techs/:keyword',TechController.searchTechs);
router.get('/tech/:title',TechController.getTech);
router.put('/tech/:title',TechController.updateTech);
router.post('/save-tech',TechController.saveTech);
router.delete('/delete-tech',TechController.deleteTech);


/**
 * @api {get} /homepage/3articles  Gets 3 recents articles
 * @apiVersion 0.1.0
 * @apiName getThreeArticles
 * @apiGroup Article
 * 
 * @apiDescription Gets the 3 most recents articles storeds in the db (to be showed in aweb4devs.com)
 * 
 * @apiSuccess {String} title The article's title
 * @apiSuccess {String} summary The article's title
 * @apiSuccess {String} img The Route of the image saved in the hosting
 * @apiSuccess {Date} date Release date of the article
*/
 

router.get('/homepage/news/3articles',ArticleController.getThreeArticles);
router.get('/homepage/news/2techs',TechController.getTwoTechs);
router.get('/homepage/carousel/:type',TechController.getTechsCarousel);

/**
 * @api {get} /homepage/news/most-visited-articles Gets the 5 most visited articles
 * @apiVersion 0.1.0
 * @apiName getMostVisitedsArticles
 * @apiGroup Article
 * 
 * @apiDescription Gets the 5 most visiteds articles based on the "Visits" keys storeds in the DB (to be showed in aweb4devs.com)
 * 
 * @apiSuccess {String} title The article's title
 * @apiSuccess {String} summary The article's title
 * @apiSuccess {String} img The Route of the image saved in the hosting
 * @apiSuccess {Date} date Release date of the article
 * @apiSuccess {Number} visits The number of article visits
*/
 
router.get('/homepage/news/most-visited-articles',ArticleController.getMostVisitedsArticles);

/**
 * @api {get} /search-articles/:keyword Gets Results from searchbar
 * @apiVersion 0.1.0
 * @apiName searchArticles
 * @apiGroup Article
 * 
 * @apiDescription Gets all the articles based on tags matrix (techonologies and keywords)
 * 
 * @apiParam {String} keyword One or more keywords for searching articles and techs (separateds by "+")
 * 
 * @apiSuccess {String} title The article's title
 * @apiSuccess {String} summary The article's title
 * @apiSuccess {Array[Array[string]]} tags 2xN Matrix which have 2 Types of tags. Techonolgies[0] and Keywords[1] . Needed for aside and searchbar  
*/
 
router.get('/search-articles/:keyword',ArticleController.searchArticles);


module.exports = router;