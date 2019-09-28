import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';
import "../comp-css/institucion.css";

class cardInstitucion extends Component {
    state={
      nombre:this.props.value.nombre,
      image: this.props.value.image,
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

            <div className="card" id="imagenProd">
             
            <img src={this.state.image} className="card-img-top" id="imgProd" alt="hola" width="50" height="400"></img>
            <div className="card-body">
           
             <button  onClick = { this.setRedirect } className="btn btn-primary">{this.state.nombre}</button>


{this.renderRedirect ()} 
                
           
            </div>
            </div>
            </div>
        );
    }
}

export default cardInstitucion;