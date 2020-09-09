const Article = require('./article')

function getArticle(req,res){ 
    let userID = req.params.userID
    Usuario.findById(userID, (err, article) => {

        if (err) return res.status(500).send({message: `error nr: ${err}`})

        if (!article) return (res.status(404)).send({message: `the article doesn't exists`})

        res.status(200).send({article})
    })
}
function getArticles(req,res){
    Usuario.find({}, (err, usuarios)=>{

        if (err) return (res.status(500)).send({message: `error nr: ${err}`})

        if (!usuarios) return (res.status(404)).send({message: `No articles`})

        res.status(200).send({usuarios})
    })
}
function updateArticle(req,res){

    let userID = req.params.userID
    let update= req.body

    Usuario.findByIdAndUpdate(userID, update, (err, articleUpdated) => {

        if (err) return res.status(500).send({message: `Error updating article ${err}`})

        res.status(200).send({article: articleUpdated})
    })
}
function deleteArticle(req,res){

    let articleID = req.params.articleID

    Usuario.findById(articleID, (err, article) => {

        article.remove(err =>{
            
            if (err) return res.status(500).send({message: `Error deleting article: ${err}`})
            res.status(200).send({message:"The article has been deleted"});
        })
    })
}

function saveArticle(req,res){
    console.log(req.body)
    let article = new Article()
    /*
    article.user = req.body.user
    article.password = req.body.password
    article.correo = req.body.correo
    article.ciudad = req.body.ciudad
    article.educacion = req.body.educacion
    article.picture = req.body.picture

    Need to update with the current model of article
*/

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