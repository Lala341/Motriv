import React, { Component } from 'react';
import Cursos from './cursos';
import Calificaciones from './calificaciones';

class userDetail extends Component {
    state ={
        usuario : this.props.value.usuario,
        password  : this.props.value.password,
        correo:"",
        productos:[],
        rol:"",
        calificaciones:[],
        method: this.props.value.method
      
    }
    UNSAFE_componentWillReceiveProps(nextProps){

        fetch("/usuarios/"+nextProps.value.usuario+"/").then(res => res.json()).then(m=>{
            console.log(m);
            console.log("2");
            this.setState({
            usuario : m.usuario,
            password : m.password,
            correo:m.correo,
            rol:m.rol,
            productos: m.productos
            
        });
        
    });
        
    }
    exitAutentication= (event) => {
     event.preventDefault();
        
     
     localStorage.removeItem("user");
    this.state.method(event);
      
    };
    render() {
       
        return (
            <div>

       
                <br></br>
                <br></br>
                <br></br>
            
            <div className="row">
                
                    <div className="col-3">
                    <img src="https://img.pngio.com/parent-directory-avatar-2png-avatar-png-256_256.png" className="img-fluid" alt="Institution" width="300" height="300"></img>

                    </div>
                    <div className="col-7">
                    <div className="row">
                    <div className="col-4"><h1>{this.state.usuario} </h1> </div>
                    <div id="cerrar"className="col-5">

                    <button onClick={(event)=>{this.exitAutentication(event)}} type="submit" className="btn btn-primary">Log out</button>

                    
                    </div>
                    </div>
                    <br></br>
                    <h3>Correo:         {this.state.correo} </h3>
                    <h3>Rol:            {this.state.rol} </h3>
                    <h3>Password:       {this.state.password} </h3>
<br></br>
<br></br>
<div className="contenedor">
<h2>Cursos</h2>

                    </div>

                  
            </div>
            </div>
            </div>
        );
    }
}

export default userDetail;