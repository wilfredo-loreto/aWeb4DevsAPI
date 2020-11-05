const config = require('../config')
function validatePassword(req,res,next){
    if(req.body.password!=config.SECRET_PASSWORD){
        return res.status(403).send({message:"Not Authorized"})
    }else{
        next()
    }
}

module.exports={
    validatePassword
}