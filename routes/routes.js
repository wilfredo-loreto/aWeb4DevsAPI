'use strict'

// IMPORTS REQUIREDS
var express = require('express');
var ArticleController = require('../controllers/article.controller');
var TechController = require('../controllers/tech.controller');

var router = express.Router();

var multipart = require('connect-multiparty');

// CRUD ROUTES

router.get('/articles',ArticleController.getArticles);
router.get('/search-articles/:keyword',ArticleController.searchArticles);
router.get('/most-visited-articles',ArticleController.getMostVisitedArticles);
router.get('/article/:title',ArticleController.getArticle);
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


module.exports = router;