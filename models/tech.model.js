'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema
const techSchema= Schema({

    
   
    title:String,
    summary:String,
    date:Date,
    tags:Array,
    content:Array,

    

})

module.exports = mongoose.model('Tech',techSchema) 