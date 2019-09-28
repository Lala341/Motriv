import React, { Component } from 'react';
import Cursos from './cursos';
import Calificaciones from './calificaciones';
import Sede from './sede';

class Institucion extends Component {
//this.props.value.
    state={
        nombre : "",
        calificaciones  : [],
        cursos:[],
        horario : "",
        descripcion:"",
        image: "https://www.touchstoneedu.com/wp-content/uploads/2018/10/cambridge-universtiy-press-touchstone-educationals.jpg",
        correo: "",
        sedes: []

    }
    componentDidMount () {
        const { institucion } = this.props.match.params;
    
        fetch(`/instituciones/${institucion}`).then(res => res.json()).then(m=>{
            console.log(m);
            console.log("2");
            this.setState({
                nombre : m.nombre,
            horario : m.horario,
            correo:m.correo,
            cursos: m.cursos,
            calificaciones:m.calificaciones,
            descripcion: m.descripcion,
            sedes:m.sedes,

            
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

<div >

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
<h2>Cursos</h2>

<Cursos value={{e:this.state.cursos}} v={false} v2={true}></Cursos>
<br></br>
                <br></br>
                    <Calificaciones value={{calificaciones:this.state.calificaciones}}></Calificaciones>
                    
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
Horario: {this.state.horario}
</div>



<div id="info">
    <h2>Sedes</h2>
    <br></br>
    {this.state.sedes.map((e,i)=><Sede key={i} value={e} />)}




                                
                                </div>


</div>

</div>


</div>
        );
    }
}

export default Institucion;