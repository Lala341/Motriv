var express = require('express');
var router = express.Router();

let Mongoclient = require("mongodb").MongoClient;

let url = "mongodb+srv://motriv:motriv1234@motriv-cluster001-jok7h.mongodb.net/test?retryWrites=true&w=majority";
let client = new Mongoclient(url, {useNewUrlParser:true});

let db = "motriv";
let colProd = "productos"
let colAgricultores = "agricultores";
let colCompradores = "colCompradores";

function findProductos(callback){
  client.then(client => {
    client.db(db).collection(colProd).find({}).toArray((err, data) => {
      callback(data);
    })
  })
}

function findAgricultores(callback){
  client.then(client => {
    client.db(db).collection(colAgricultores).find({}).toArray((err, data) => {
      callback(data);
    })
  })
}

function findCompradores(callback){
  client.then(client => {
    client.db(db).collection(colCompradores).find({}).toArray((err, data) => {
      callback(data);
    })
  })
}

function createProductos(callback){
  client.then(client => {
    client.db(db).collection(colProd).insertOne(content, (err, data) =>{
      callback(data);
    })
  })
}

function createAgricultor(callback){
  client.then(client => {
    client.db(db).collection(colAgricultores).insertOne(content, (err, data) =>{
      callback(data);
    })
  })
}

function createComprador(callback){
  client.then(client => {
    client.db(db).collection(colCompradores).insertOne(content, (err, data) =>{
      callback(data);
    })
  })
}

/* GET productos */
router.get('/productos', function(req, res, next) {
  function callback(data){
    res.json(data);
  }
  findProductos(callback);
});

router.post("/productos", function(req,res,next){
  function callback(data){
    res.json(data);
  }
  let data  = req.body;
  createProductos(data, callback);
})

module.exports = router;
