"use strict";

var mongoose = require('mongoose');
var config = require('./config')
var app = require('./app');
var options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify:false
};

mongoose.Promise = global.Promise;
mongoose.connect(config.uri, options)
        .then(() => {
            console.log("Conexion a la base de datos establecida satisfactoriamente /o/");

            app.listen(config.port, () => {
                console.log("Servidor corriendo correctamente en la url: localhost:3700");
            });
        })
        .catch(err => console.log(err));


app.set('port', config.port);       