'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema
const techSchema= Schema({

    
   
    title:String,
    summary:String,
    img: String,
    date:Date,
    tags:Array,
    content:Array,
    references: Array

    

},
{
    collection: "techs",
})

module.exports = mongoose.model('Tech',techSchema) 