"use strict";

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
