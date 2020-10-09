const Article = require("../models/article.model");
const fs = require("fs");
var FtpDeploy = require("ftp-deploy");

const pathToDir = "./uploads"
const removeDir = function(path) {
  if (fs.existsSync(path)) {
    const files = fs.readdirSync(path)
    
    if (files.length > 0) {
      files.forEach(function(filename) {
     
        
          fs.unlinkSync(path + "/" + filename)
       
      })
    } else {
      console.log("No files found in the directory.")
    }
  } else {
    console.log("Directory path not found.")
  }
}
var ftpDeploy = new FtpDeploy();
var config = {

  user: "korvus@korvusweb.com",
  password: "nuestra 3mpresa k0rvus",
  host: "gator4228.hostgator.com",
  port: 21,
  localRoot: "./uploads",
  remoteRoot: "/reactloreto.korvusweb.com/static/img",
  include: ["*", ".*"],
  exclude: [
    "dist/**/*.map",
    "node_modules/**",
    "node_modules/**/.*",
    "controllers/**/.*",
    "doc/**/.*",
    "models/**/.*",
    "routes/**/.*",
  ],
  deleteRemote: false,
  forcePasv: true,
};
const multer = require("multer");
var storage = multer.diskStorage({
  destination: "./uploads",
  filename: function (req, file, cb) {
    cb(null, req.body.title.split(" ").join("-") + "-" + file.originalname);
  },
});

function getArticle(req, res) {
  let articleTitle = req.params.title.toLowerCase();

  Article.findOne({ title: articleTitle }, { _id: 0 }, (err, article) => {
    if (err) return res.status(500).send({ message: `error nr: ${err}` });

    if (!article)
      return res.status(404).send({ message: `the article doesn't exists` });

    res.status(200).send({ article });
  });
}

function getAsideArticles(req, res) {
  var tagsArray = [];
  var result = [];
  var band = true;

  Article.findOne({ title: req.params.title }, { _id: 0 }, (err, article) => {
    if (err) return res.status(500).send({ message: `error nr: ${err}` });
    if (!article) return res.status(404).send({ message: `No article found` });
    tagsArray = [...article.technologies];
    Article.find({}, { _id: 0 }, (err, articles) => {
      for (let document of articles) {
        band = true;
        if (document.title != article.title) {
          for (let i of tagsArray) {
            if (band) {
              for (let j of document.technologies) {
                if (i == j && band) {
                  result.push(document.title);
                  band = false;
                }
              }
            }
          }
        }
      }
      if (err) return res.status(500).send({ message: `error nr: ${err}` });
      if (!result) return res.status(404).send({ message: `No related articles` });
      res.status(200).send({ result });
    });
  });
}

function getArticles(req, res) {
  Article.find(
    {},
    {
      title: 1,
      summary: 1,
      date: 1,
      technologies: 1,
      visits: 1,
      img: 1,
      _id: 0,
    },
    (err, articles) => {
      if (err) return res.status(500).send({ message: `error nr: ${err}` });

      if (!articles) return res.status(404).send({ message: `No articles` });

      res.status(200).send({ articles });
    }
  ).sort({ date: -1 });
}

function searchArticles(req, res) {
  let keyWord = req.params.keyword.toLowerCase().split(" ");
  console.log(keyWord);

  Article.find(
    { tags: { $in: [keyWord[0], keyWord[1]] } },
    { title: 1, summary: 1, tags: 1, technologies: 1, _id: 0 },
    (err, articles) => {
      if (err) return res.status(500).send({ message: `error nr: ${err}` });

      if (!articles) return res.status(404).send({ message: `No articles` });

      res.status(200).send({ articles });
    }
  );
}

function getMostVisitedsArticles(req, res) {
  Article.find(
    {},
    { title: 1, summary: 1, date: 1, visits: 1, img: 1 },
    (err, articles) => {
      if (err) return res.status(500).send({ message: `error nr: ${err}` });

      if (!articles) return res.status(404).send({ message: `No articles` });

      res.status(200).send({ articles });
    }
  )
    .limit(5)
    .sort({ visits: -1 });
}

function updateArticle(req, res) {
  let articleTitle = req.params.title;
  let update = req.body;

  Article.findOneAndUpdate(
    { title: articleTitle },
    update,
    (err, articleUpdated) => {
      if (err)
        return res
          .status(500)
          .send({ message: `Error updating article ${err}` });

      res.status(200).send({ article: articleUpdated });
    }
  );
}
function deleteArticle(req, res) {
  let articleTitle = req.params.title; 

  Article.findOne({ title: articleTitle }, (err, article) => {
    article.remove((err) => {
      if (err)
        return res
          .status(500)
          .send({ message: `Error deleting article: ${err}` });
      res.status(200).send({ message: "The article has been deleted" });
    });
  });
}

function saveArticle(req, res) {
  console.log(req.body);
  let article = new Article();
  article.title = req.body.title;
  article.type = req.body.type;
  article.summary = req.body.summary;
  article.img = req.body.img;
  article.date = req.body.date;
  article.tags = req.body.tags;
  article.content = req.body.content;
  article.visits = req.body.visits;

  article.save((err, savedArticle) => {
    if (err)
      res.status(500).send({ message: `Error saving the article ${err}` });

      if (req.files) {
        ftpDeploy.deploy(config, function (err, res) {
          if (err) console.log(err);
          else {
            removeDir(pathToDir)
            console.log("finished:", res);
          }
        });
        
      } else {
        return res.status(500).send({ message: "Error uploading the Files" });
      }
    res.status(200).send({ article: savedArticle });
  });
}

function getThreeArticles(req, res) {
  Article.find(
    {},
    { title: 1, summary: 1, img: 1, date: 1, _id: 0 },
    (err, articles) => {
      if (err) return res.status(500).send({ message: `error nr: ${err}` });

      if (!articles) return res.status(404).send({ message: `No articles` });

      res.status(200).send({ articles });
    }
  )
    .limit(3)
    .sort({ date: -1 });
}

module.exports = {
  getArticle,
  getArticles,
  getThreeArticles,
  getAsideArticles,
  updateArticle,
  deleteArticle,
  saveArticle,
  searchArticles,
  getMostVisitedsArticles,
};
