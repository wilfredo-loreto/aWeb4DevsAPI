const Article = require('../models/article.model')

function getArticle(req,res){ 
    let articleTitle = req.params.title;
    Article.findOne({$or:[{title: articleTitle}] }, (err, article) => {

        if (err) return res.status(500).send({message: `error nr: ${err}`})

        if (!article) return (res.status(404)).send({message: `the article doesn't exists`})

        res.status(200).send({article})
    })
}
function getArticles(req,res){
    Article.find({}, (err, articles)=>{

        if (err) return (res.status(500)).send({message: `error nr: ${err}`})

        if (!articles) return (res.status(404)).send({message: `No articles`})

        res.status(200).send({articles})
    })
}
function updateArticle(req,res){

    let articleID = req.params.articleID
    let update= req.body

    Article.findByIdAndUpdate(articleID, update, (err, articleUpdated) => {

        if (err) return res.status(500).send({message: `Error updating article ${err}`})

        res.status(200).send({article: articleUpdated})
    })
}
function deleteArticle(req,res){

    let articleID = req.params.articleID

    Article.findById(articleID, (err, article) => {

        article.remove(err =>{
            
            if (err) return res.status(500).send({message: `Error deleting article: ${err}`})
            res.status(200).send({message:"The article has been deleted"});
        })
    })
}

function saveArticle(req,res){
    console.log(req.body)
    let article = new Article()
    article.type=req.body.type
    article.title=req.body.title
    article.summary=req.body.summary
    article.date=req.body.date
    article.tags=req.body.tags
    article.content=req.body.content
        

    article.save((err, savedArticle) => {

        if (err) res.status(500).send({message: `Error saving the article ${err}`})

        res.status(200).send({article: savedArticle})

    })
}

module.exports={
    getArticle,
    getArticles,
    updateArticle,
    deleteArticle,
    saveArticle
}