const Tech = require('../models/tech.model')
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



function getTech(req,res){ 
    let techTitle = req.params.title;
    Tech.findOne({title: techTitle}, (err, tech) => {

        if (err) return res.status(500).send({message: `error nr: ${err}`})

        if (!tech) return (res.status(404)).send({message: `the tech doesn't exists`})

        res.status(200).send({tech})
    })
}

function getTechs(req,res){
    let techType = req.params.type;
    Tech.find({type: techType},{title: 1, summary: 1, tags: 1, logo: 1,parent:1,_id:0}, (err, techs)=>{

        if (err) return (res.status(500)).send({message: `error nr: ${err}`})

        if (!techs) return (res.status(404)).send({message: `No techs`})

        res.status(200).send({techs})
    })
    .sort({parent:1,title:1})
}



function asideTechs(req,res){
    let techType  = req.params.type;

    if(techType  == "frontend" || techType  == "backend"){

    Tech.find({type: techType},{title: 1,parent:1,type:1, _id: 0}, (err, techs)=>{

        if (err) return (res.status(500)).send({message: `error nr: ${err}`})

        if (!techs) return (res.status(404)).send({message: `No techs`})

        res.status(200).send({techs})
    })
    .sort({parent:1,title:1})
    }else{
        
    Tech.find({},{title: 1,parent:1,type:1, _id: 0}, (err, techs)=>{

        if (err) return (res.status(500)).send({message: `error nr: ${err}`})

        if (!techs) return (res.status(404)).send({message: `No techs`})

        res.status(200).send({techs})
    })
    .sort({parent:1,title:1})
    }
}

function carouselTechs(req,res){

    Tech.find({},{title: 1, img: 1,type:1, _id: 0}, (err, techs)=>{

        if (err) return (res.status(500)).send({message: `error nr: ${err}`})

        if (!techs) return (res.status(404)).send({message: `No techs`})

        res.status(200).send({techs})
    }).sort({type:-1,date: -1})
}

function searchTechs(req,res){

    let keyWord = req.params.keyword.toLowerCase().split(" ");

    Tech.find({tags:{$in: [keyWord[0],keyWord[1],keyWord[2],keyWord[3]]}},{title: 1, type: 1, summary: 1, tags: 1, _id: 0}, (err, techs) => {

        if (err) return (res.status(500)).send({message: `error nr: ${err}`})

        if (!techs) return (res.status(404)).send({message: `No Techs`})

        res.status(200).send({techs})
    })
    
}

function updateTech(req,res){

    let techTitle = req.params.title
    let update= req.body

    Tech.findOneAndUpdate({title: techTitle}, update, (err, techUpdated) => {

        if (err) return res.status(500).send({message: `Error updating tech ${err}`})

        res.status(200).send({tech: techUpdated})
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
    tech.type=req.body.type
    tech.summary=req.body.summary
    tech.img=req.body.img
    tech.date=req.body.date
    tech.logo=req.body.logo
    tech.tags=req.body.tags
    tech.content=req.body.content
    tech.parent=req.body.parent
        
    tech.save((err, savedTech) => {

        if (err) res.status(500).send({message: `Error saving the tech ${err}`})
        if (req.files) {
            ftpDeploy.deploy(config, function (err, res) {
              if (err) console.log(err);
              else {
                removeDir(pathToDir)
                console.log("finished:", res);
              }
            });
            
          } else {
            return res.status(500).send({ message: "error Uploading Files to Hosting. Need to use Filezilla" });
          }
        res.status(200).send({tech: savedTech})

    })
}

function getTwoTechs(req, res) {
    Tech.find(
      {},
      { title: 1, img: 1,type:1,_id:0 },
      (err, techs) => {
        if (err) return res.status(500).send({ message: `error nr: ${err}` });
  
        if (!techs) return res.status(404).send({ message: `No Techs` });
  
        res.status(200).send({ techs });
      }
    )
      .limit(2)
      .sort({ date: -1 });
  }

module.exports={
    getTech,
    getTechs,
    getTwoTechs,
    updateTech,
    deleteTech,
    saveTech,
    searchTechs,
    asideTechs,
    carouselTechs
}