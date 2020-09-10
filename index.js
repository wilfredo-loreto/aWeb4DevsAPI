"use strict";

const MongoClient = require("mongodb").MongoClient;
const uri =
  "mongodb+srv://wilfredo:yzz3rvay6@cluster0.gqdek.mongodb.net/prueba1?retryWrites=" +
  "true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
async function run() {
  try {
    await client.connect();
    const collection = client.db("prueba1").collection("articles");
    const example = await collection.findOne();
    console.log(example);
    console.log("Conexion establecida");
    // perform actions on the collection object
  } catch (err) {
    console.log(err.stack);
  } finally {
    client.close();
  }
}
run();
