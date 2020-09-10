const Tech = require('./tech.model')

function getArticle(req,res){ 
    let techID = req.params.userID
    Tech.findById(techID, (err, tech) => {

        if (err) return res.status(500).send({message: `error nr: ${err}`})

        if (!tech) return (res.status(404)).send({message: `the tech doesn't exists`})

        res.status(200).send({tech})
    })
}
function getArticles(req,res){
    Tech.find({}, (err, articles)=>{

        if (err) return (res.status(500)).send({message: `error nr: ${err}`})

        if (!articles) return (res.status(404)).send({message: `No articles`})

        res.status(200).send({articles})
    })
}
function updateArticle(req,res){

    let userID = req.params.userID
    let update= req.body

    Tech.findByIdAndUpdate(userID, update, (err, articleUpdated) => {

        if (err) return res.status(500).send({message: `Error updating tech ${err}`})

        res.status(200).send({tech: articleUpdated})
    })
}
function deleteArticle(req,res){

    let techID = req.params.techID

    Tech.findById(techID, (err, tech) => {

        tech.remove(err =>{
            
            if (err) return res.status(500).send({message: `Error deleting tech: ${err}`})
            res.status(200).send({message:"The tech has been deleted"});
        })
    })
}

function saveTech(req,res){
    console.log(req.body)
    let tech = new Tech()
    tech.type=req.body.type
    tech.title=req.body.title
    tech.summary=req.body.summary
    tech.date=req.body.date
    tech.logo=req.body.logo
    tech.tags=req.body.tags
    tech.content=req.body.content
        
    tech.save((err, savedTech) => {

        if (err) res.status(500).send({message: `Error saving the tech ${err}`})

        res.status(200).send({tech: savedTech})

    })
}

module.exports={
    getArticle,
    getArticles,
    updateArticle,
    deleteArticle,
    saveTech
}