var express = require('express');
var router = express.Router();
//Ejemplo conexion mongoDB
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://admin:admin@proyectoweb-n33pf.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });



/* GET home page. */
router.get('/prueba', function (req, res, next) {

  client.connect(err => {
    client.db("Idioma").collection("Usuarios").find({}).toArray((err, data) => {
      res.send(data)
    });
    client.close();
  });

});



module.exports = router;
