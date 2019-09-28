import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';
import "../comp-css/institucion.css";

class cardInstitucion extends Component {
    state={
      nombre:this.props.value.nombre,
      image: this.props.value.image,
      precio: this.props.value.precio,
      descripcion: this.props.value.descripcion,
      redirect:false
    }
    renderRedirect = () => { 
        let a='/instituciones/'+this.state.nombre;
        if (this.state.redirect) { 
          return <Redirect to = {a} /> 
        } 
      }
      setRedirect = () => { 
        this.setState ({ 
          redirect: true 
        }) 
      }  
    render() {
        return (
            <div className="col-3" id="contenedorProd">

            <div className="card">
             
            <img src={this.state.image} className="card-img-top" id="imgProd" alt="hola" width="50" height="400"></img>
            <div className="card-body">
           
             <button  onClick = { this.setRedirect } className="btn btn-primary" id="btnProd">{this.state.nombre}</button>
             <p className="mt-3" id="precio">${this.state.precio}</p>
             <p>{this.state.descripcion}</p>


{this.renderRedirect ()} 
                
           
            </div>
            </div>
            </div>
        );
    }
}

export default cardInstitucion;