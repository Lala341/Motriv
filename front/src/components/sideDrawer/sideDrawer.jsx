// eslint-disable-next-line no-unused-vars
import React, { Component } from "react";
import "./sideDrawer.css";
import cerrado from "./arrowRight.svg";
import abierto from "./arrowDown.svg";

class SideDrawer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      tamaños: {
        pequeño: true,
        mediano: true,
        grande: true
      },
      precios: {
        precioBajo: true,
        precioMedio: true,
        precioAlto: true
      },
      colores: {
        negro: true,
        blanco: true,
        rojo: true,
        azul: true,
        verde: true,
        rosado: true,
        cafe: true,
        fucsia: true,
        azulClaro: true,
        amarillo: true,
        avano: true
      }
    };
  }

  handleClick() {
    this.setState({ isOpen: !this.state.isOpen });
  }
  handleChange(arreglo, atrib) {
    let nuevoEstado = { ...this.state };
    nuevoEstado[arreglo][atrib] = !nuevoEstado[arreglo][atrib];
    this.setState(nuevoEstado);
    if (arreglo === "tamaños") {
      this.props.handlerFiltroTamano(this.state[arreglo]);
    }
    else if (arreglo === "precios") {
      this.props.handlerFiltroPrecio(this.state[arreglo]);
    }
    else if (arreglo === "colores") {
      this.props.handlerFiltroColor(this.state[arreglo]);
    }
  }
  render() {
    return (
      <div id="sticky">
        <div className="cont">
          {!this.state.isOpen &&
            <button id="botonCerrado" onClick={() => this.handleClick()}>
              <img className="botonFiltros" src={cerrado} alt="" />
            </button>
          }
          {this.state.isOpen &&
            <button id="botonAbierto" onClick={() => this.handleClick()}>
              <img className="botonFiltros" src={abierto} alt="" />
            </button>
          }
          <h4 id="palabraFiltros">Filtros</h4>
        </div>
        {this.state.isOpen &&
          <nav id="sideDrawerNav">
            <ul className='filtros'>
              <li className="filtro">
                <h4 className="tituloFiltro">Tamaño</h4>
                <div className="contenedorInputValor">
                  <input className="inputFiltro" type="checkbox" defaultChecked={this.state.tamaños.pequeño} onChange={() => this.handleChange("tamaños", "pequeño")} />
                  <h6 className="opcion">Pequeño</h6>
                </div>
                <div className="contenedorInputValor">
                  <input className="inputFiltro" type="checkbox" defaultChecked={this.state.tamaños.mediano} onChange={() => this.handleChange("tamaños", "mediano")} />
                  <h6 className="opcion">Mediano</h6>
                </div>
                <div className="contenedorInputValor">
                  <input className="inputFiltro" type="checkbox" defaultChecked={this.state.tamaños.grande} onChange={() => this.handleChange("tamaños", "grande")} />
                  <h6 className="opcion">Grande</h6>
                </div>
              </li>
              <li className="filtro">
                <h4 className="tituloFiltro">Precio</h4>
                <div className="contenedorInputValor">
                  <input className="inputFiltro" type="checkbox" defaultChecked={this.state.precios.precioBajo} onChange={() => this.handleChange("precios", "precioBajo")} />
                  <h6 className="opcion">$50,000 - $100,000</h6>
                </div>
                <div className="contenedorInputValor">
                  <input className="inputFiltro" type="checkbox" defaultChecked={this.state.precios.precioMedio} onChange={() => this.handleChange("precios", "precioMedio")} />
                  <h6 className="opcion">$100,000 - $200,000</h6>
                </div>
                <div className="contenedorInputValor">
                  <input className="inputFiltro" type="checkbox" defaultChecked={this.state.precios.precioAlto} onChange={() => this.handleChange("precios", "precioAlto")} />
                  <h6 className="opcion">$200,000 - $500,000</h6>
                </div>
              </li>
              <li className="filtro">
                <h4 className="tituloFiltro">Color</h4>
                <div className="contenedorInputValor">
                  <input className="inputFiltro" type="checkbox" defaultChecked={this.state.colores.negro} onChange={() => this.handleChange("colores", "negro")} />
                  <div id="negro" />
                  <input className="inputFiltro" type="checkbox" defaultChecked={this.state.colores.blanco} onChange={() => this.handleChange("colores", "blanco")} />
                  <div id="blanco" />
                  <input className="inputFiltro" type="checkbox" defaultChecked={this.state.colores.rojo} onChange={() => this.handleChange("colores", "rojo")} />
                  <div id="rojo" />
                </div>
                <div className="contenedorInputValor">
                  <input className="inputFiltro" type="checkbox" defaultChecked={this.state.colores.azul} onChange={() => this.handleChange("colores", "azul")} />
                  <div id="azul" />
                  <input className="inputFiltro" type="checkbox" defaultChecked={this.state.colores.azulClaro} onChange={() => this.handleChange("colores", "azulClaro")} />
                  <div id="azulClaro" />
                  <input className="inputFiltro" type="checkbox" defaultChecked={this.state.colores.fucsia} onChange={() => this.handleChange("colores", "fucsia")} />
                  <div id="fucsia" />
                </div>
                <div className="contenedorInputValor">
                  <input className="inputFiltro" type="checkbox" defaultChecked={this.state.colores.cafe} onChange={() => this.handleChange("colores", "cafe")} />
                  <div id="cafe" />
                  <input className="inputFiltro" type="checkbox" defaultChecked={this.state.colores.verde} onChange={() => this.handleChange("colores", "verde")} />
                  <div id="verde" />
                  <input className="inputFiltro" type="checkbox" defaultChecked={this.state.colores.rosado} onChange={() => this.handleChange("colores", "rosado")} />
                  <div id="rosado" />
                </div>
                <div className="contenedorInputValor">
                  <input className="inputFiltro" type="checkbox" defaultChecked={this.state.colores.avano} onChange={() => this.handleChange("colores", "avano")} />
                  <div id="avano" />
                  <input className="inputFiltro" type="checkbox" defaultChecked={this.state.colores.amarillo} onChange={() => this.handleChange("colores", "amarillo")} />
                  <div id="amarillo" />
                </div>
              </li>
            </ul>
          </nav>
        }
      </div >
    );
  }
}

export default SideDrawer;