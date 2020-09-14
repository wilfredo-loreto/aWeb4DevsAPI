'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema
const articleSchema= Schema({

    title:String,
    summary:String,
    date:Date,
    visits: Number,
    img:String,
    tags:Array,
    content:Array,
    references: Array

}, 
{
    collection: "articles",
})

module.exports = mongoose.model('Article',articleSchema) 
