import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';


class RegistrarUsuario extends Component {
    constructor(){
        super();
        this.state ={
            email:'',
            password:'',
            name:'',
            hasAgreed: false,
            redirect:false
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange=(e)=>{
        let target = e.target;

        let value = target.type === 'checkbox' ? target.checked:target.value;

        let name = target.name;

        this.setState({
            [name]:value 
        });
    }

    handleSubmit=(e)=>{
        e.preventDefault();
        var data = {usuario:document.getElementById("name").value,password:document.getElementById("password").value,correo:document.getElementById("email").value, cursos:[],calificaciones:[], rol:"USUARIO"}
        localStorage.setItem("user",JSON.stringify(data));
      
        fetch('/usuarios/', {
            method: 'POST', // or 'PUT'
            body: JSON.stringify(data), // data can be `string` or {object}!
            headers:{
              'Content-Type': 'application/json'
            }
          }).then(res => res.json())
          .catch(error => console.error('Error:', error))
          .then(response => {console.log('Success:', response);
          this.setState ({ 
            redirect: true 
          }) });
    }
    renderRedirect = () => { 
        if (this.state.redirect) { 
          return <Redirect to = '/login' /> 
        } 
      } 
    render() {
        return (
            <div>
            <br></br>
            <br></br>
            <div  className="col-8">  
            <div id="divlogin" className="text-center">
            <div >
                
                <form onSubmit={this.handleSubmit} className="form-group">
                    <div >
                        <label >Nombre Completo</label>
                        <input type="text" id="name" className="form-control" placeholder="Nombre Completo"  ></input>
                    </div>
                    <div >
                        <label >Contraseña</label>
                        <input type="password" id="password" className="form-control" placeholder="Ingresa tu contraseña" ></input>
                    </div>
                    <div >
                        <label >Email</label>
                        <input type="text" id="email" className="form-control" placeholder="email"  ></input>
                    </div>
                    <div >
                        <button onClick = { (event)=>{this.handleSubmit(event)} } className="btn btn-primary">Registrarse</button>
                    </div>
                </form>
                </div>
                {this.renderRedirect ()} 
                </div>
                </div>
            </div>
        );
    }
}

export default RegistrarUsuario;