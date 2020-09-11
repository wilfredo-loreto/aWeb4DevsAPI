"use strict";

<<<<<<< HEAD
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
=======
var mongoose = require('mongoose');
var app = require('./app');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb+srv://wilfredo:yzz3rvay6@cluster0.gqdek.mongodb.net/prueba1?retryWrites=true&w=majority')
        .then(() => {
            console.log("Conexión a la base de datos establecida satisfactoriamente /o/");

            app.listen(process.env.PORT, () => {
                console.log("Servidor corriendo correctamente en la url: localhost:3700");
            });
        })
        .catch(err => console.log(err));
>>>>>>> 0924bfd9f5c59c7c8e3fa646f81272f9e84e5a18
