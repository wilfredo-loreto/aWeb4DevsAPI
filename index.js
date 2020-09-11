"use strict";

const mongoose = require("mongoose");
var options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};
const uri =
  "mongodb+srv://wilfredo:yzz3rvay6@cluster0.gqdek.mongodb.net/prueba1?retryWrites=" +
  "true&w=majority";

async function conectionToDb() {
  var connection = mongoose.connection;
  try {
    await mongoose.connect(uri, options);
    console.log("connected");
      connection.db.collection("articles", function (err, collection) {
        collection.find().toArray(function (err, data) {
          console.log(data);
        });
      });
   
  } catch (err) {
    console.log("could not connect. Error: " + err);
  }
}
conectionToDb();
