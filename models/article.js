'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema
const articleSchema= Schema({
 
    id:String,
    type:String, 
    title:String,
    summary:String,
    date:String,
    logo:String,
    tags:Array,
    content:Array,

})

module.exports = mongoose.model('Article',articleSchema) 
