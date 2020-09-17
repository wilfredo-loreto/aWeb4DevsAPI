'use strict'

// IMPORTS REQUIREDS
var express = require('express');
var ArticleController = require('../controllers/article.controller');
var TechController = require('../controllers/tech.controller');

var router = express.Router();

var multipart = require('connect-multiparty');

// CRUD ROUTES

router.get('/articles',ArticleController.getArticles);
<<<<<<< HEAD
=======
router.get('/search-articles/:keyword',ArticleController.searchArticles);
router.get('/most-visited-articles',ArticleController.getMostVisitedArticles);
>>>>>>> c22bd6ad20fc489706de1cf876d59111a4630e9a
router.get('/article/:title',ArticleController.getArticle);
router.get('/articles/:asideArticles',ArticleController.getArticlesOfAside);
router.put('/article/:title',ArticleController.updateArticle);
router.post('/save-article',ArticleController.saveArticle);
router.delete('/delete-article',ArticleController.deleteArticle);


router.get('/techs/:type',TechController.getTechs);
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