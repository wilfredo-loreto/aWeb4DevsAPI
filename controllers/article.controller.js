const Article = require('../models/article.model')

function getArticle(req,res){ 
    let articleTitle = req.params.title.toLowerCase();
    
    Article.findOne({title: articleTitle}, (err, article) => {

        if (err) return res.status(500).send({message: `error nr: ${err}`})

        if (!article) return (res.status(404)).send({message: `the article doesn't exists`})

        res.status(200).send({article})
    })
}

function getArticles(req,res){
    Article.find({},{title: 1, summary: 1, date: 1, visits: 1, img: 1, _id: 0}, (err, articles)=>{

        if (err) return (res.status(500)).send({message: `error nr: ${err}`})

        if (!articles) return (res.status(404)).send({message: `No articles`})

        res.status(200).send({articles})
    })
}

function searchArticles(req,res){
    let keyWord = req.params.keyword.toLowerCase();

    Article.find({tags: keyWord},{title: 1, summary: 1, tags: 1, _id: 0}, (err, articles) => {

        if (err) return (res.status(500)).send({message: `error nr: ${err}`})

        if (!articles) return (res.status(404)).send({message: `No articles`})

        res.status(200).send({articles})
    })
    
}


function getMostVisitedArticles(req,res){
    Article.find({},{title: 1, summary: 1, date: 1, visits: 1, img: 1}, (err, articles)=>{

        if (err) return (res.status(500)).send({message: `error nr: ${err}`})

        if (!articles) return (res.status(404)).send({message: `No articles`})

        res.status(200).send({articles})
    }).limit(5).sort({visits: -1})
}
function updateArticle(req,res){

    let articleTitle = req.params.title
    let update= req.body

    Article.findOneAndUpdate({title: articleTitle}, update, (err, articleUpdated) => {

        if (err) return res.status(500).send({message: `Error updating article ${err}`})

        res.status(200).send({article: articleUpdated})
    })
}
function deleteArticle(req,res){

    let articleTitle = req.params.title

    Article.findOne({title: articleTitle} , (err, article) => {

        article.remove(err =>{
            
            if (err) return res.status(500).send({message: `Error deleting article: ${err}`})
            res.status(200).send({message:"The article has been deleted"});
        })
    })
}

function saveArticle(req,res){
    console.log(req.body)
    let article = new Article()
    article.title=req.body.title
    article.type=req.body.type
    article.summary=req.body.summary
    article.img=req.body.img
    article.date=req.body.date
    article.tags=req.body.tags
    article.content=req.body.content
    article.visits=req.body.visits
    article.references=req.body.references
        

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
    saveArticle,
    getMostVisitedArticles,
    searchArticles
}