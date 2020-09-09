'use strict'

const e = require('express')
const MongoClient = require('mongodb').MongoClient
const uri = "mongodb+srv://wilfredo:yzz3rvay6@cluster0.gqdek.mongodb.net/prueba1?retryWrites=true&w=majority"
const client = new MongoClient(uri, { useNewUrlParser: true })
client.connect(err => {
    if(err){
        console.log(`Error en la base de datos nr: ${err}`)
    }else{
        const collection = client.db("prueba1").collection("articles")
        console.log(collection.find())
        console.log("Conexion establecida")
        // perform actions on the collection object
        client.close();
    }
});