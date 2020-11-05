const Article = require("../models/article.model");
const config = require("../config");
function addOneVisit(req, res, next) {
  if (req.body.password == config.UPDATE_VISITS_PASSWORD) {
    let articleTitle = req.params.title;
    let addVisit = req.body.visits;
    Article.findOneAndUpdate(
      { title: articleTitle },
      { visits: addVisit },
      (err, articleUpdated) => {
        if (err)
        return res
        .status(500)
        .send({ message: `Error updating article ${err}` });
        res.status(200).send("The article was edited");

      }
    );
  } else if (req.body.password != config.SECRET_PASSWORD) {
    
    return res.status(403).send({ message: "Not Authorized" });
  }else{
    next();
  }
}

module.exports = {
  addOneVisit,
};
