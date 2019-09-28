import React, { Component } from 'react';
import Cursos from './cursos';
import Calificaciones from './calificaciones';
import Sede from './sede';

class Institucion extends Component {
//this.props.value.
    state={
        nombre : "",
        cantidad  : "",
        precio:"",
        descripcion:"",
        fechaCultivo: "",
        ubicacion:"",
        image: "",
        clima: ""

    }
    componentDidMount () {
        const { institucion } = this.props.match.params;
    
        fetch(`/instituciones/${institucion}`).then(res => res.json()).then(m=>{
            console.log(m);
            console.log("2");
            this.setState({
                nombre : m.nombre,
                descripcion: m.descripcion,
                cantidad : m.cantidad,
                precio:m.precio,
                fechaCultivo: m.fechaCultivo,
                ubicacion:m.ubicacion,
                clima: m.clima,
                image: m.image

            
        });
        
    });
      }
      addCalificacion= () =>{
     
          let m={
        "usuario":"usuario1",
          "calificacion":{
              "puntaje": document.getElementById("pun").value,
              "descripcion": document.getElementById("descrip").value
          }};

          var url = '/instituciones/'+this.state.nombre+"/calificaciones";
          var data = m;
          document.getElementById("pun").value="";
          document.getElementById("descrip").value="";
          fetch(url, {
            method: 'POST', 
            body: JSON.stringify(data), 
            headers:{
              'Content-Type': 'application/json'
            }
          }).then(res => res.json())
          .catch(error => console.error('Error:', error))
          .then(response =>{ console.log('Success:', response);
          let g=this.state.calificaciones;
          g.push(m.calificacion);
          this.setState({
            calificaciones:g
            
            
        });});
      }
    render() {
        return (
            <div>
               

<br></br>
<br></br>
<div id="contenedor" className="text-center">

<div id="imagenProd">

<img src={this.state.image} className="img-fluid" alt="Institution" width="900" height="500"></img>

<br></br>

<br></br>

</div>

</div>
<div className="row">
  <div id="columna-descripcion" className="col-8">
  <h1 className="text-center">{this.state.nombre}</h1>
<br></br>

<br></br>

<h1>Descripción</h1>
<br></br>
<p align="justify">{this.state.descripcion}</p>
<br></br>
<br></br>
<h2>Propietario</h2>
<p>Felipe Rodriguez</p>
<br></br>
<br></br>
<h2>Escribir</h2>

<form>

  <div className="form-group">
    <label >Puntaje</label>
    <input type="puntaje" className="form-control" id="pun"  placeholder="Enter puntaje"></input>
  </div>
  <div className="form-group">
    <label >Descripcion</label>
    <textarea className="form-control" id="descrip" rows="3"></textarea>
  </div>
  
</form>
<button onClick={this.addCalificacion} type="submit" className="btn btn-primary">Submit</button>

</div>

<div   className="col-3">
<br></br>

<div id="info-horario">
 Ubicacion: {this.state.ubicacion}
 <br></br>

Clima: {this.state.clima}
</div>




</div>

</div>


</div>
        );
    }
}

export default Institucion;