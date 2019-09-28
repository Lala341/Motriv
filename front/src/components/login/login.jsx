import React, { Component } from "react";
import axios from "axios";
import "./login.css";

class LoginForm extends Component {

  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.usuario = React.createRef();
    this.clave = React.createRef();
  }

  handleSubmit(event) {
    event.preventDefault();
    let credenciales = {};
    credenciales.usuario = this.usuario.current.value;
    credenciales.clave = this.clave.current.value;
    let promesa1 = axios.post("/autenticacion/login", credenciales);
    promesa1.then((res) => {
      if (res.data === "OK") {
        this.props.handleAuthentication();
        alert("Bienvenida Maria Consuelo");
      }
      else {
        alert("Credenciales Invalidas");
      }
    });
    promesa1.catch(() => alert("no se pudo comunicar con el servidor"));
  }

  render() {

    if (!this.props.autenticado) {
      return (
        <div className="contenedorLogin">
          <div id="login">
            <form id="formulario" onSubmit={this.handleSubmit}>
              <h1>¡Bienvenido Administrador!</h1>
              <input className="campoTexto" type="text" placeholder="Usuario" ref={this.usuario} />
              <input className="campoTexto" type="password" placeholder="Contraseña" ref={this.clave} />
              <input className="boton" type="submit" value="Submit" />
            </form>
          </div>
        </div>) || false;
    }
    else {
      return (
        <div className="contenedor">
          <h1>Ya estas autenticado como administrador!</h1>
        </div>
      );
    }
  }
}

export default LoginForm;