
var FtpDeploy = require("ftp-deploy");
const fs = require("fs");
const pathToDir = "./uploads";
const removeDir = function (path) {
  if (fs.existsSync(path)) {
    const files = fs.readdirSync(path);

    if (files.length > 0) {
      files.forEach(function (filename) {
        fs.unlinkSync(path + "/" + filename);
      });
    } else {
      console.log("No files found in the directory.");
    }
  } else {
    console.log("Directory path not found.");
  }
};
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

function saveImage(req,res){    
    if (!req.files) {
  
      return res.status(500).send({ message: "Error Uploading Files to Hosting. No Files Sent." });   
        
      } else {
        ftpDeploy.deploy(config, function (err, filesUploaded) {
          if (err) return res.status(500).send({message: `error deploying the images. Info: ${err}`})
          else {
            removeDir(pathToDir)
            res.status(200).send({message:`Files Uploaded Correctly ${filesUploaded}`})
          }
        });
      }
  }

  module.exports ={
      saveImage
  }