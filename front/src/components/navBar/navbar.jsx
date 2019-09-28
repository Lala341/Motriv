// eslint-disable-next-line no-unused-vars
import React, { Component } from "react";
import "./navbar.css";
import titulo from "./icono.jpeg";

class NavBar extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      titulos: [
        { nombre: "Productos", ruta: "/#/productos" },
        { nombre: "Productores", ruta: "/#/productores" },
        { nombre: "Collares", ruta: "/#/collares" },
        { nombre: "Pulseras", ruta: "/#/pulseras" },
        { nombre: "Swarosky", ruta: "/#/swarosky" },
        { nombre: "Novias", ruta: "/#/novias" }
      ],
      selected: "Inicio"
    };
  }
  render() {
    return (
      <div id='barraSticky'>
        <div className="container">
          <button id="boton" onClick={() => this.handleClose()}>☰</button>
          <a onClick={() => this.goHome()} href="/#/">
            <img className='logo' src={titulo}></img>
          </a>
        </div>
        <nav id="barra">
          <ul className='titulosHorizontal'>
            {this.state.titulos.map(
              titulo => {

                if (this.state.selected != titulo.nombre) {
                  return (
                    < li id="titulo" key={titulo.nombre} >
                      <a onClick={() => this.handleClick(titulo.nombre)} href={titulo.ruta}>{titulo.nombre}</a>
                    </li>);
                }
                else {
                  return (
                    < li className="selected" id="titulo" key={titulo.nombre} >
                      <a onClick={() => this.handleClick(titulo.nombre)} href={titulo.ruta}>{titulo.nombre}</a>
                    </li>);
                }
              }
            )}
          </ul>
          {this.state.isOpen &&
            <ul className='titulosVertical'>
              {this.state.titulos.map(
                titulo => {

                  if (this.state.selected != titulo.nombre) {
                    return (
                      < li id="titulo" key={titulo.nombre} >
                        <a onClick={() => this.handleClick(titulo.nombre)} href={titulo.ruta}>{titulo.nombre}</a>
                      </li>);
                  }
                  else {
                    return (
                      < li className="selectedOnPhone" id="titulo" key={titulo.nombre} >
                        <a onClick={() => this.handleClick(titulo.nombre)} href={titulo.ruta}>{titulo.nombre}</a>
                      </li>);
                  }
                }
              )}
            </ul>}
        </nav >
      </div >
    );
  }
  //hamburger click
  handleClose() {
    this.setState({ isOpen: !this.state.isOpen });
  }
  //title click
  handleClick(selectedTitle) {
    this.setState({ isOpen: !this.state.isOpen, selected: selectedTitle });
  }
  //logo click
  goHome() {
    this.setState({ isOpen: false, selected: "inicio" });
  }
}

export default NavBar;
