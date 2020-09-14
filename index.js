"use strict";

var mongoose = require('mongoose');
var app = require('./app');
var port = 3700;
var uri = 'mongodb+srv://wilfredo:yzz3rvay6@cluster0.gqdek.mongodb.net/prueba1?retryWrites=true&w=majority';
var options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

mongoose.Promise = global.Promise;
mongoose.connect(uri, options)
        .then(() => {
            console.log("Conexion a la base de datos establecida satisfactoriamente /o/");

            app.listen(process.env.PORT || port, () => {
                console.log("Servidor corriendo correctamente en la url: localhost:3700");
            });
        })
        .catch(err => console.log(err));


app.set('port', process.env.PORT || port);       