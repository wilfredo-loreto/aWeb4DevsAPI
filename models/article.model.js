"use strict";

const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const articleSchema = Schema(
  {
    title: String,
    type: String,
    summary: String,
    img: String,
    date: Date,
    tags: Object,
    content: Array,
    visits: Number,
    references: Array,
  },
  {
    collection: "articles",
  }
);


module.exports = mongoose.model('Article',articleSchema) 
