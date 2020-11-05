"use strict";

// IMPORTS REQUIREDS
var express = require("express");
const multer = require("multer");
var storage = multer.diskStorage({
  destination: "./uploads",
  filename: function (req, file, cb) {
    cb(null, req.body.title.split(" ").join("-") + "-" + file.originalname);
  },
});
const upload = multer({ storage: storage });
var ArticleController = require("../controllers/article.controller");
var TechController = require("../controllers/tech.controller");
var FtpController = require("../controllers/ftp.controller");
var auth = require("../middlewares/auth")
var updateVisits = require("../middlewares/updateVisits")
var router = express.Router();

// CRUD ROUTES

/**
 * @api {get} /articles Gets every article
 * @apiVersion 0.1.0
 * @apiName getArticles
 * @apiGroup Article
 *
 * @apiDescription Gets all the articles storeds in the DB (to be showed in aweb4devs.com/articles)
 *
 * @apiSuccess {String} title The article's title
 * @apiSuccess {String} summary The article's title
 * @apiSuccess {String} img image name saved in the hosting
 * @apiSuccess {Date} date Release date of the article
 * @apiSuccess {Number} visits The number of article visits
 */
router.get("/articles", ArticleController.getArticles);

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
 * @apiSuccess {String} img The Name of the image saved in the hosting
 * @apiSuccess {Date} date Release date of the article
 * @apiSuccess {Array[String]} technologies An Array of technologies relationated with the current article
 * @apiSuccess {Array[String]} tags an Array of tags for the searchbar
 * @apiSuccess {Object} content an object with all the dynamic content of the article in order. (images, texts, subtitles, references and lists)
 * @apiSuccess {Number} visits The number of article visits
 */

router.get("/article/:title", ArticleController.getArticle);

/**
 * @api {get} /article/aside/:asideArticles Gets the Relationated Articles
 * @apiVersion 0.1.0
 * @apiName getAsideArticles
 * @apiGroup Article
 *
 * @apiDescription Gets the Relationated Articles storeds in the DB
 *
 * @apiParam {String} title The article's title
 *
 * @apiSuccess {Array[String]} result an Array of related articles
 */

router.get("/article/aside/:title", ArticleController.getAsideArticles);

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
 * @apiSuccess {String} img The Name of the image saved in the hosting
 * @apiSuccess {Date} date Release date of the article
 * @apiSuccess {Array[String]} technologies An Array of technologies relationated with the current article
 * @apiSuccess {Array[String]} tags an Array of tags for the searchbar
 * @apiSuccess {Object} content an object with all the dynamic content of the article in order. (images, texts, subtitles, references and lists)
 * @apiSuccess {Number} visits The number of article visits
 */

router.put("/article/:title",updateVisits.addOneVisit, ArticleController.updateArticle);

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
 * @apiSuccess {String} img The Name of the image saved in the hosting
 * @apiSuccess {Date} date Release date of the article
 * @apiSuccess {Array[String]} technologies An Array of technologies relationated with the current article
 * @apiSuccess {Array[String]} tags an Array of tags for the searchbar
 * @apiSuccess {Object} content an object with all the dynamic content of the article in order. (images, texts, subtitles, references and lists)
 * @apiSuccess {Number} visits The number of article visits
 *  */

router.post("/save-article", auth.validatePassword, ArticleController.saveArticle);

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
 * @apiSuccess {String} img The Name of the image saved in the hosting
 * @apiSuccess {Date} date Release date of the article
 * @apiSuccess {Array[String]} technologies An Array of technologies relationated with the current article
 * @apiSuccess {Array[String]} tags an Array of tags for the searchbar
 * @apiSuccess {Object} content an object with all the dynamic content of the article in order. (images, texts, subtitles, references and lists)
 * @apiSuccess {Number} visits The number of article visits
 */

router.delete("/delete-article/:title", ArticleController.deleteArticle);

/**
 * @api {get} /techs/:type Gets all the techs based on type
 * @apiVersion 0.1.0
 * @apiName getTechs
 * @apiGroup Tech
 *
 * @apiDescription Gets all the techs based on type storeds in the DB (to be showed in aweb4devs.com/type)
 *
 * @apiParam {String} type The tech type
 *
 * @apiSuccess {Array[string]} tags An Array of tags for searchbar
 * @apiSuccess {String} title The tech's title
 * @apiSuccess {String} summary The tech's summary
 * @apiSuccess {String} logo The Name of the logo saved in the hosting
 * @apiSuccess {String} parent The actual parent of the technology (if empty, it's a parent)
 */
router.get("/techs/:type", TechController.getTechs);

/**
 * @api {get} /aside-techs/:type Gets all tech Titles
 * @apiVersion 0.1.0
 * @apiName asideTechs
 * @apiGroup Tech
 *
 * @apiDescription Gets all tech Titles to be showed in the aside based on type
 *
 * @apiParam {String} type The tech type
 *
 * @apiSuccess {Array[Object]} techs Object with: Tech Title, Tech Type and tech Parent (if empty, it's a parent).
 */
router.get("/aside-techs/:type", TechController.asideTechs);

/**
 * @api {get} /search-techs/:keyword Gets Techs based on tags
 * @apiVersion 0.1.0
 * @apiName searchTechs
 * @apiGroup Tech
 *
 * @apiDescription Search Techs based on keywords (Searchbar Results) Separateds by " "
 *
 *  @apiParam {String}  keyword The tech tag
 *
 * @apiSuccess {Array[Object]} techs Object with: Array of related tags, Tech Title, Tech Type and tech Summary.
 */
router.get("/search-techs/:keyword", TechController.searchTechs);

/**
 * @api {get} /tech/:title Gets an Tech
 * @apiVersion 0.1.0
 * @apiName getTech
 * @apiGroup Tech
 *
 * @apiDescription Gets an tech based on title
 *
 * @apiParam {String}  title The tech title
 *
 * @apiSuccess {String} title The tech's title
 * @apiSuccess {String} type The tech's type, Font-end / Back-end
 * @apiSuccess {String} summary The tech's summary
 * @apiSuccess {Date} date Release date of the tech
 * @apiSuccess {String} img The Name of the image saved in the hosting
 * @apiSuccess {String} logo The Name of the logo saved in the hosting
 * @apiSuccess {Array[String]} tags An Array of tags for searchbar
 * @apiSuccess {String} parent The actual parent of the technology (if empty, it's a parent)
 * @apiSuccess {Object} content An object with all the dynamic content of the article in order. (images, texts, subtitles, references and lists)
 */
router.get("/tech/:title", TechController.getTech);

/**
 * @api {put} /tech/:title Update An tech
 * @apiVersion 0.1.0
 * @apiName updateTech
 * @apiGroup Tech
 *
 * @apiDescription Updates a tech stored in the DB (CRUD Operation)
 *
 * @apiParam {String} title The tech title
 *
 * @apiSuccess {String} title The tech's title
 * @apiSuccess {String} type The tech's type, Font-end / Back-end
 * @apiSuccess {String} summary The tech's summary
 * @apiSuccess {Date} date Release date of the tech
 * @apiSuccess {String} img The Name of the image saved in the hosting
 * @apiSuccess {String} logo The Name of the logo saved in the hosting
 * @apiSuccess {Array[String]} tags An Array of tags for searchbar
 * @apiSuccess {String} parent The actual parent of the technology (if empty, it's a parent)
 * @apiSuccess {Object} content An object with all the dynamic content of the article in order. (images, texts, subtitles, references and lists)
 */
router.put("/tech/:title", auth.validatePassword, TechController.updateTech);

/**
 * @api {post} /save-tech Saves an tech in DB
 * @apiVersion 0.1.0
 * @apiName saveTech
 * @apiGroup Tech
 *
 * @apiDescription Saves a new tech in the db (CRUD Operation)
 *
 * @apiSuccess {String} title The tech's title
 * @apiSuccess {String} type The tech's type, Font-end / Back-end
 * @apiSuccess {String} summary The tech's summary
 * @apiSuccess {Date} date Release date of the tech
 * @apiSuccess {String} img The Name of the image saved in the hosting
 * @apiSuccess {String} logo The Name of the logo saved in the hosting
 * @apiSuccess {Array[String]} tags An Array of tags for searchbar
 * @apiSuccess {String} parent The actual parent of the technology (if empty, it's a parent)
 * @apiSuccess {Object} content An object with all the dynamic content of the article in order. (images, texts, subtitles, references and lists)
 */
router.post("/save-tech", auth.validatePassword, TechController.saveTech);

/**
 * @api {delete} /delete-tech/:title Delete an tech
 * @apiVersion 0.1.0
 * @apiName deleteTech
 * @apiGroup Tech
 *
 * @apiDescription Deletes a tech stored in the DB (CRUD Operation)
 *
 * @apiParam {String}  title The tech title
 *
 * @apiSuccess {String} title The tech's title
 * @apiSuccess {String} type The tech's type, Font-end / Back-end
 * @apiSuccess {String} summary The tech's summary
 * @apiSuccess {Date} date Release date of the tech
 * @apiSuccess {String} img The Name of the image saved in the hosting
 * @apiSuccess {String} logo The Name of the logo saved in the hosting
 * @apiSuccess {Array[String]} tags An Array of tags for searchbar
 * @apiSuccess {String} parent The actual parent of the technology (if empty, it's a parent)
 * @apiSuccess {Object} content An object with all the dynamic content of the article in order. (images, texts, subtitles, references and lists)
 */
router.delete("/delete-tech/:title", TechController.deleteTech);

/**
 * @api {get} /homepage/news/3articles  Gets 3 recents articles
 * @apiVersion 0.1.0
 * @apiName getThreeArticles
 * @apiGroup Article
 *
 * @apiDescription Gets the 3 most recents articles storeds in the db (to be showed in aweb4devs.com)
 *
 * @apiSuccess {String} title The article's title
 * @apiSuccess {String} summary The article's title
 * @apiSuccess {String} img The Name of the image saved in the hosting
 * @apiSuccess {Date} date Release date of the article
 */

router.get("/homepage/news/3articles", ArticleController.getThreeArticles);

/**
 * @api {get} /homepage/news/2techs Gets 2 recents tech
 * @apiVersion 0.1.0
 * @apiName getTwoTechs
 * @apiGroup Tech
 *
 * @apiDescription Gets the 2 most recents techs storeds in the db (to be showed in aweb4devs.com)
 *
 * @apiParam {String}  title The tech title
 *
 * @apiSuccess {String} title The tech's title
 * @apiSuccess {Date} date Release date of the tech
 * @apiSuccess {String} img The Name of the image saved in the hosting
 */
router.get("/homepage/news/2techs", TechController.getTwoTechs);

/**
 * @api {get} /homepage/carousel Gets techs for carousel
 * @apiVersion 0.1.0
 * @apiName carouselTechs
 * @apiGroup Tech
 *
 * @apiDescription Gets techs for carousel based on type
 *
 * @apiParam {String} type The tech type
 *
 * @apiSuccess {String} title The tech's title
 * @apiSuccess {String} img The Name of the image saved in the hosting
 */
router.get("/homepage/carousel", TechController.carouselTechs);

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
 * @apiSuccess {String} img The Name of the image saved in the hosting
 * @apiSuccess {Date} date Release date of the article
 * @apiSuccess {Number} visits The number of article visits
 */

router.get("/homepage/news/most-visited-articles",ArticleController.getMostVisitedsArticles);

/**
 * @api {get} /search-articles/:keyword Gets Results from searchbar
 * @apiVersion 0.1.0
 * @apiName searchArticles
 * @apiGroup Article
 *
 * @apiDescription Search articles based on keywords (SearchBar)
 *
 * @apiParam {String} keyword One or more keywords (separateds by " ")
 *
 * @apiSuccess {String} title The article's title
 * @apiSuccess {String} summary The article's summary
 * @apiSuccess {Array[String]} tags An Array of tags for searchbar
 * @apiSuccess {Array[String]} technologies An Array of relateds technologies
 */

router.get("/search-articles/:keyword", ArticleController.searchArticles);

/**
 * @api {post} /hosting/save-images Upload images to hosting
 * @apiVersion 0.1.0
 * @apiName uploadImages
 *
 * @apiDescription Uploads an Array of images to the hosting asociating those images with the Document Title
 *
 *
 * @apiSuccess {String} title The Document's title
 * @apiSuccess {File} images an Array of images in binary files
 */

router.post(
  "/hosting/save-images",
  upload.array("images"),
  FtpController.saveImage
);

module.exports = router;
