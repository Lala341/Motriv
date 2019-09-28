var express = require('express');
var router = express.Router();
//Ejemplo conexion mongoDB
const MongoClient = require('mongodb').MongoClient;
var ObjectId = require('mongodb').ObjectID;
const uri = "mmongodb+srv://motriv:motriv1234@motriv-cluster001-jok7h.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
var conn = client.connect();


/* GET all institutions. */
router.get('/', function (req, res, next) {
    conn.then(client => {
        client.db("Idioma").collection("Institucion").find({}).toArray((err, data) => {
            res.send(data)
        });
    });
});

/* GET one institution */
router.get('/:nombre', (req, res, next) => {
    conn.then(client => {
        client.db("Idioma").collection("Institucion").find({ nombre: req.params.nombre }).toArray((err, data) => {
            if (data === 0) {
                res.status(404).send("No existe esa institucion");
            }
            else {
                res.send(data[0]);
            }
        });
    });
});

/* POST one institution */
router.post('/', (req, res, next) => {
    conn.then(client => {
        client.db("Idioma").collection("Institucion").find({ nombre: req.body.nombre }).toArray((err, data) => {
            if (data.length === 0) {
                client.db("Idioma").collection("Institucion").insertOne({
                    nombre: req.body.nombre,
                    horario: req.body.horario,
                    sedes: req.body.sedes ? req.body.sedes : [],
                    calificaciones: [],
                    cursos: [],
                    descripcion: req.body.descripcion,
                    correo: req.body.correo
                }).then(result => {
                    agregarCursos(req.body.cursos, req.body.nombre);
                    res.send("Se ha agregado correctamente la institución");
                });
            }
            else {
                res.status(409).send("Ya existe esa institución");
            }
        });

    });
});

function agregarCursos(cursos, nombre) {
    for (let i of cursos) {
        client.db("Idioma").collection("Cursos").insertOne(i).then(resp => {
            i._id = ObjectId(resp.insertedId);
            client.db("Idioma").collection("Institucion").updateOne({ nombre: nombre }, { $addToSet: { cursos: i } });
        });
    }
}

router.put("/:nombre", (req, res) => {
    conn.then(client => {
        client.db("Idioma").collection("Institucion").find({ nombre: req.params.nombre }).toArray((err, data) => {
            if (data.length === 0) {
                res.status(404).send("No existe esa institución");
                return;
            }
            delete req.body.calificaciones
            client.db("Idioma").collection("Institucion").updateOne({ nombre: req.params.nombre }, { $set: req.body });
            actualizarCursos(req.body.cursos);
            res.send("Institucion actualizada");
        });
    });
});

function actualizarCursos(cursos) {
    for (let i of cursos) {
        console.log(i);
        ide = i["_id"];
        delete i["_id"];
        client.db("Idioma").collection("Cursos").updateOne({_id:ObjectId(ide)},{$set:i});
    }
}

router.delete("/:nombre", (req, res) => {
    conn.then(client => {
        client.db("Idioma").collection("Institucion").find({ nombre: req.params.nombre }).toArray((err, data) => {
            if (data.length === 0) {
                res.status(404).send("No existe esa institución");
                return;
            }
            eliminarCursos(data[0].cursos);
            eliminarCalificaciones(data[0].calificaciones);
            client.db("Idioma").collection("Institucion").deleteOne({ nombre: req.params.nombre }).then(rest => {
                res.send("Institución eliminada");
            });
        });
    });
});

function eliminarCursos(cursos) {
    for (let i of cursos) {
        client.db("Idioma").collection("Cursos").deleteOne({ _id: ObjectId(i["_id"]) });
    }
}

function eliminarCalificaciones(califs) {
    for (let i of califs) {
        client.db("Idioma").collection("Calificaciones").deleteOne({ _id: ObjectId(i["_id"]) });
    }
}

//DESDE ACA SE MANEJAN LOS CURSOS DE UNA INSTITUCION
/* POST one course of one institution */

router.get('/:nombre/cursos', (req, res, next) => {
    conn.then(client => {
        client.db("Idioma").collection("Institucion").find({ nombre: req.params.nombre }).toArray((err, data) => {
            res.send(data[0]["cursos"]);
        });
    });
});

router.post('/:nombre/cursos/', (req, res, next) => {
    conn.then(client => {
        client.db("Idioma").collection("Institucion").find({ nombre: req.params.nombre }).toArray((err, data) => {
            if (data.length === 0) {
                res.status(404).send("No existe esa institución");
            }
            else {
                client.db("Idioma").collection("Cursos").insertOne(req.body).then(resp => {
                    client.db("Idioma").collection("Cursos").find({ _id: ObjectId(resp.insertedId) }).toArray((err, data) => {
                        client.db("Idioma").collection("Institucion").updateOne({ nombre: req.params.nombre }, { $addToSet: { cursos: data[0] } });
                        res.send("Se ha agregado el curso");
                    });
                });
            }
        });
    });
});

router.put("/:nombre/cursos/:id", (req, res) => {
    conn.then(client => {
        client.db("Idioma").collection("Institucion").find({ nombre: req.params.nombre }).toArray((err, data) => {
            if (data.length === 0) {
                res.status(404).send("No existe esa institución");
            }
            else {
                let cursos = data.cursos;
                for (let cur in cursos) {
                    if (cursos[cur]["_id"] === ObjectId(req.params.id)) {
                        break;
                    }
                    else if (cur === cursos.length - 1) {
                        res.status(404).send("No existe este curso, o no existe en esta institución");
                        return;
                    }
                }
                req.body._id = ObjectId(req.params.id);
                client.db("Idioma").collection("Institucion").updateOne({ nombre: req.params.nombre, "cursos._id": ObjectId(req.params.id) }, { $set: { "cursos.$": req.body } }).then(resp => {
                    client.db("Idioma").collection("Cursos").updateOne({ _id: ObjectId(req.params.id) }, { $set: req.body });
                    res.send("Se ha modificado el curso");
                });
            }
        });
    });
});

router.delete("/:nombre/cursos/:id", (req, res) => {
    conn.then(client => {
        client.db("Idioma").collection("Institucion").find({ nombre: req.params.nombre }).toArray((err, data) => {
            if (data.length === 0) {
                res.status(404).send("No existe esa institución");
            }
            else 
            {
                let cursosExt = data[0].cursos;
                for (let cur in cursosExt) {
                    if (cursosExt[cur]["_id"].toString() === req.params.id) {
                        cursosExt.splice(cur,1);
                        break;
                    }
                    else if (cur === cursosExt.length - 1) 
                    {
                        res.status(404).send("No existe este curso, o no existe en esta institución");
                        return;
                    }
                }
                client.db("Idioma").collection("Cursos").deleteOne({ _id: ObjectId(req.params.id) }).then(rest => {
                    if (rest.deletedCount === 0) {
                        res.status(404).send("No existe el curso");
                    }
                    else {
                        client.db("Idioma").collection("Institucion").updateOne({ nombre: req.params.nombre}, { $set: { cursos: cursosExt } }).then(resp => {
                            res.send("Se ha eliminado el curso");
                        });
                    }
                });
            }
        });
    });
});

//DESDE ACA SE MANEJAN LAS CALIFICACIONES DE UNA INSTITUCION

router.get('/:nombre/calificaciones', (req, res, next) => {
    conn.then(client => {
        client.db("Idioma").collection("Calificaciones").find({ nombre: req.params.nombre }).toArray((err, data) => {
            res.send(data[0]["calificaciones"]);
        });
    });
});

router.post('/:nombre/calificaciones', (req, res, next) => {
    conn.then(client => {
        client.db("Idioma").collection("Institucion").find({ nombre: req.params.nombre }).toArray((err, data) => {
            if (data.length === 0) {
                res.status(404).send("No existe esa institución");
            }
            else if(!req.body.calificacion || !req.body.usuario){
                res.status(422).send("La informacion enviada no es la esperada");
            }
            else 
            {
                client.db("Idioma").collection("Calificaciones").insertOne(req.body.calificacion).then(resp => {
                    client.db("Idioma").collection("Calificaciones").find({ _id: ObjectId(resp.insertedId) }).toArray((err, data) => {
                        client.db("Idioma").collection("Institucion").updateOne({ nombre: req.params.nombre }, {$addToSet:{calificaciones: data[0]}}).then(resp => {
                            client.db("Idioma").collection("Usuarios").updateOne({usuario:req.body.usuario}, {$addToSet:{calificaciones: data[0]}});
                            res.send("Se ha agregado la calificacion");
                        });
                    });
                });
            }
        });
    });
});

//NO SE IMPLEMENTA PUT NI DELETE, SE HA DEFINIDO QUE PARA EL NEGOCIO, ES MEJOR NO CAMBIAR NI ELIMINAR CALIFICACIONES

module.exports = router;
