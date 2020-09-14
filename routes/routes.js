'use strict'

var express = require('express');
var ArticleController = require('../controllers/article.controller');
var TechController = require('../controllers/tech.controller');

var router = express.Router();

var multipart = require('connect-multiparty');

router.get('/articles',ArticleController.getArticles);
router.get('/more-visited-articles',ArticleController.getMostVisitedArticles);
router.get('/article/:title',ArticleController.getArticle);
router.put('/article/:title',ArticleController.updateArticle);
router.post('/save-article',ArticleController.saveArticle);
router.delete('/delete-article',ArticleController.deleteArticle);


router.get('/techs',TechController.getTechs);
router.get('/tech/:title',TechController.getTech);
router.put('/tech/:title',TechController.updateTech);
router.post('/save-tech',TechController.saveTech);
router.delete('/delete-tech',TechController.deleteTech);

module.exports = router;