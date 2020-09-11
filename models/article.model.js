'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema
const articleSchema= Schema({

    
    title:String,
    summary:String,
    date:Date,
    logo:String,
    tags:Array,
    content:Array,

    

})

module.exports = mongoose.model('Article',articleSchema) 
