var express = require('express');


var ob = require('mongodb').ObjectID;
var bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://motriv:motriv1234@motriv-cluster001-jok7h.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
var conn = client.connect();

let app = express();

/*Obtener todos los usuarios*/
app.get("/", (req, res) => {
    getAll((data) => {
        res.send(data);
    })
});
app.get("/callcenter", (req, res) => {
    getAll((data) => {
        res.send(data);
    })
})

function getAll(callback) {
    conn.then(cliente => {
        cliente.db("Idioma").collection("Usuarios").find({}).toArray((err, data) => {
            callback(data);
        })
    })
}


/*Obtener un usuario especifico */
app.get("/:login", (req, res) => {

    var nombre = req.params.login;

    getUsuario((data) => {
        res.send(data);
    }, nombre)
})

function getUsuario(callback, nombre) {
    conn.then(cliente => {
        cliente.db("Idioma").collection("Usuarios").find({ usuario: nombre }).toArray((err, data) => {
            callback(data[0]);
        })
    })
}

app.post("/", (req, res) => {
    var datos = req.body;
    write((data) => {
        res.send(data);
    }, datos)
});
app.post("/callcenter", (req, res) => {
    var datos = req.body;
    write((data) => {
        res.send(data);
    }, datos)
})

function write(callback, datos) {
    conn.then(cliente => {
        cliente.db("Idioma").collection("Usuarios").find({ usuario: datos.usuario }).toArray((err, data) => {
            if (data.length === 0) {
                cliente.db("Idioma").collection("Usuarios").insertOne(datos, (info) => {
                    callback(info);
                });

            }
            else {
                callback("Ese nombre de usuario ya existe, por favor elegir otro");
            }
        })
    })
}

app.put("/:login", (req, res) => {
    var nombre = req.params.login;
    var datos = req.body;
    update((data) => {
        res.send(data);
    }, nombre, datos)
})

function update(callback, nombre, datos) {
    conn.then(cliente => {
        cliente.db("Idioma").collection("Usuarios").updateOne({ usuario: nombre }, { $set: { password: datos.password, correo: datos.correo }, upsert: true }, (data) => {
            callback(data);
        })
    })
}

app.delete("/:login", (req, res) => {
    var nombre = req.params.login;
    borrar((data) => {
        res.send(data);
    }, nombre)
});

function borrar(callback, nombre) {
    conn.then(cliente => {
        cliente.db("Idioma").collection("Usuarios").deleteOne({ usuario: nombre }, info => {
            callback(info);
        })
    })
}

/*Metodos para Calificaciones*/

app.get("/:login/calificaciones", (req, res) => {
    var nombre = req.params.login;

    getCalificaciones((data) => {
        res.send(data)
    }, nombre)

})

function getCalificaciones(callback, nombre) {
    conn.then(cliente => {
        cliente.db("Idioma").collection("Usuarios").find({ usuario: nombre }).toArray((err, data) => {
            callback(data[0]["calificaciones"])
        })
    })
}

app.post("/:login/calificaciones/", (req, res) => {
    var nombre = req.params.login;
    var datos = req.body;
    writeCalificacion((data) => {
        res.send(data);
    }, nombre, datos)
})

function writeCalificacion(callback, nombre, datos) {
    conn.then(cliente => {
        cliente.db("Idioma").collection("Usuarios").find({ usuario: nombre }).toArray((err, data) => {
            if (data.length === 0) {
                callback("No se encuentra ese usuario");
            }
            else {
                cliente.db("Idioma").collection("Calificaciones").insertOne(datos).then(resp => {
                    cliente.db("Idioma").collection("Calificaciones").find({ _id: resp.insertedId }).toArray((err, data) => {
                        cliente.db("Idioma").collection("Usuarios").updateOne({ usuario: nombre }, {
                            $addToSet: {
                                calificaciones: data[0]
                            }
                        });
                        callback("Calificacion añadida");
                    })
                })
            }
        })
    })
}

/** cursos*/
function obtenerCursos(callback, nombre) {
    conn.then(cliente => {
        cliente.db("Idioma").collection("Usuarios").find({ usuario: nombre }).toArray((err, data) => {
            callback(data[0]["cursos"])
        });
    });
}

app.get(("/:login/cursos"), (req, res) => {
    let datos = req.params.login;
    obtenerCursos(data => { res.send(data) }, datos);
});

app.post("/:login/cursos", (req, res) => {
    let nombre = req.params.login;
    let body = req.body;
    conn.then(cliente => {
        cliente.db("Idioma").collection("Cursos").find({ _id: ob(body.id) }).toArray((err, data) => {
            console.log(data[0]);
            cliente.db("Idioma").collection("Usuarios").updateOne({ usuario: nombre }, { $addToSet: { cursos: data[0] } });
            res.send("Curso agregado");
        });
    })
})


/* POST one institution by SMS
  plssssssssssss*/

var WEBHOOK_SECRET = "XE4WELUPNM76X4DPEL3LLLHCPL7EKUX3";

app.post('/sms', bodyParser.urlencoded({ extended: true }), (req, res, next) => {
    var body = req.body.content;
    conn.then(client => {
        client.db("Idioma").collection("Institucion").find({ nombre: req.body.nombre }).toArray((err, data) => {
            if (data.length === 0) {
                client.db("Idioma").collection("Institucion").insertOne({
                    /*
                    nombre: req.body.nombre,
                    horario: req.body.horario,
                    sedes: req.body.sedes ? req.body.sedes : [],
                    calificaciones: [],
                    cursos: [],
                    descripcion: req.body.descripcion,
                    correo: req.body.correo
                    */
                    nombre: "Maiz",
                    cantidad :"2500",
                    precio:"420",
                    fechaCultivo:"10-10-2018",
                    ubicacion:"Cali",
                    clima:"templado",
                    descripcion:body,
                    image:"http://agrotiempo.com/wp-content/uploads/2017/01/cana-azucar.jpg",
                }).then(result => {
                    res.send("Se ha agregado correctamente la institución");
                });
            }
            else {
                res.status(409).send("Ya existe esa institución");
            }
        });

    });
});



app.delete("/:login/cursos/:id", (req, res) => {
    let login = req.params.login
    let idCurso = req.params.id
    conn.then(cliente => {
        cliente.db("Idioma").collection("Usuarios").updateOne({ usuario: login }, { $pull: {cursos: {_id:ob(idCurso)} } });
        res.send("Curso borrado");
    })
})

module.exports = app;
