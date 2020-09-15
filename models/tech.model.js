"use strict";

const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const techSchema = Schema(
  {
    title: String,
    type: String,
    summary: String,
    date: Date,
    img: String,
    logo: String,
    tags: Array,
    content: Array,
    references: Array,
  },
  {
    collection: "techs",
  }
);

    
module.exports = mongoose.model('Tech',techSchema) 
