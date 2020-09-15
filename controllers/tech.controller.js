const Tech = require('../models/tech.model')

function getTech(req,res){ 
    let techTitle = req.params.title;
    Tech.findOne({title: techTitle}, (err, tech) => {

        if (err) return res.status(500).send({message: `error nr: ${err}`})

        if (!tech) return (res.status(404)).send({message: `the tech doesn't exists`})

        res.status(200).send({tech})
    })
}
function getTechs(req,res){
    let techTipe = req.params.type;
    Tech.find({type: techTipe},{title: 1, summary: 1, tags: 1, logo: 1}, (err, techs)=>{

        if (err) return (res.status(500)).send({message: `error nr: ${err}`})

        if (!techs) return (res.status(404)).send({message: `No techs`})

        res.status(200).send({techs})
    })
}
function updateTech(req,res){

    let techTitle = req.params.title
    let update= req.body

    Tech.findOneAndUpdate({title: techTitle}, update, (err, articleUpdated) => {

        if (err) return res.status(500).send({message: `Error updating tech ${err}`})

        res.status(200).send({tech: articleUpdated})
    })
}
function deleteTech(req,res){

    let techTitle = req.params.title

    Tech.findOne({title: techTitle}, (err, tech) => {

        tech.remove(err =>{
            
            if (err) return res.status(500).send({message: `Error deleting tech: ${err}`})
            res.status(200).send({message:"The tech has been deleted"});
        })
    })
}

function saveTech(req,res){
    console.log(req.body)
    let tech = new Tech()
    tech.title=req.body.title
    tech.summary=req.body.summary
    tech.img=req.body.img
    tech.date=req.body.date
    tech.logo=req.body.logo
    tech.tags=req.body.tags
    tech.content=req.body.content
    tech.references=req.body.references
        
    tech.save((err, savedTech) => {

        if (err) res.status(500).send({message: `Error saving the tech ${err}`})

        res.status(200).send({tech: savedTech})

    })
}

module.exports={
    getTech,
    getTechs,
    updateTech,
    deleteTech,
    saveTech
}