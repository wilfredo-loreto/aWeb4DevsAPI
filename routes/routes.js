'use strict'

// IMPORTS REQUIREDS
var express = require('express');
var ArticleController = require('../controllers/article.controller');
var TechController = require('../controllers/tech.controller');

var router = express.Router();

var multipart = require('connect-multiparty');

// CRUD ROUTES

/**
 * @api {get} /articles Get all the articles
 * @apiVersion 0.1.0
 * @apiName getArticles
 * @apiGroup Article
 * 
 * @apiDescription Get all the articles storeds in the DB (to be showed in aweb4devs.com/articles)
 * 
 * @apiParam {String} title The article title
 * 
 * @apiSuccess {String} title The article's title
 * @apiSuccess {String} type Front-end / Back-end / Mixed (Both)
 * @apiSuccess {String} summary The article's title
 * @apiSuccess {String} img The Route of the image saved in the hosting
 * @apiSuccess {Date} date Release date of the article
 * @apiSuccess {Matrix[String,String]} tags 2xN Matrix which have 2 Types of tags. Techonolgies[0] and Keywords[1] . Needed for aside and searchbar  
 * @apiSuccess {Array[String]} content An Array of paragraphs and images to create an article
 * @apiSuccess {Number} visits The number of article visits
 * @apiSuccess {Matrix[String,String]} references 2xN Matrix (N=Qty of references) which have Link[0] and Name[1] of the page references (String). 
 */
router.get('/articles',ArticleController.getArticles);



router.get('/article/:title',ArticleController.getArticle);
router.get('/articles/:asideArticles',ArticleController.getArticlesOfAside);
router.put('/article/:title',ArticleController.updateArticle);
router.post('/save-article',ArticleController.saveArticle);
router.delete('/delete-article',ArticleController.deleteArticle);


router.get('/techs/:type',TechController.getTechs);
router.get('/aside-techs/:type',TechController.asideTechs);
router.get('/carousel-techs/:type',TechController.carouselTechs);
router.get('/search-techs/:keyword',TechController.searchTechs);
router.get('/tech/:title',TechController.getTech);
router.put('/tech/:title',TechController.updateTech);
router.post('/save-tech',TechController.saveTech);
router.delete('/delete-tech',TechController.deleteTech);

router.get('/homepage/news/3articles',ArticleController.getThreeArticles);
router.get('/homepage/news/2techs',TechController.getTwoTechs);
router.get('/homepage/carousel/:type',TechController.getTechsCarousel);
router.get('/homepage/news/most-visited-articles',ArticleController.getMostVisitedArticles);

module.exports = router;