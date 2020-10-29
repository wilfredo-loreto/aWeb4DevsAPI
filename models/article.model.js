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
    technologies: Array,
    tags: Array,
    content: Array,
    visits: Number,
  },
  {
    collection: "articles",
  }
);

module.exports = mongoose.model("Article", articleSchema);
