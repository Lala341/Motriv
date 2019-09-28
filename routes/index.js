var express = require('express');
var router = express.Router();

let Mongoclient = require("mongodb").MongoClient;

let url = "mongodb+srv://motriv:motriv1234@motriv-cluster001-jok7h.mongodb.net/test?retryWrites=true&w=majority";
let client = new Mongoclient(url, {useNewUrlParser});


function connectProducto(callback){
  client.connect((err) => {
    if (err) throw err;
    let db = client.db("motriv");
    let collectionProducto = db.collection("producto");

    callback(collectionProducto, client);
  })
}

function connectAgricultores(){
  client.connect((err) => {
    if (err) throw err;
    let db = client.db("motriv");
    let collectionAgricultores = db.collection("agricultores");

    callback(collectionAgricultores, client);
  })
}

function connectCompradores(){
  client.connect((err) => {
    if (err) throw err;
    let db = client.db("motriv");
    let collectionCompradores = db.collection("compradores");

    callback(collectionCompradores, client);
  })
}

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
