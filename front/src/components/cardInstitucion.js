import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';

class cardInstitucion extends Component {
    state={
      nombre:this.props.value.nombre,
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
            <div className="col-5">
            <div className="card" >
            <img src="http://img2.rtve.es/i/?w=1600&i=1529697257299.jpg" className="card-img-top" alt="hola" width="50" height="400"></img>
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