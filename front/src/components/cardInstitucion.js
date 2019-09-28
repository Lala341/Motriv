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
            <img src="https://images.vexels.com/media/users/3/152803/isolated/preview/7a26300dc9960e11f6a46966e696539d-escuela-cl--sica-ilustraci--n-de-edificio-by-vexels.png" className="card-img-top" alt="hola" width="50" height="400"></img>
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