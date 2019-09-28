import React, { Component } from "react";
import Catalogo from "../catalogo/catalogo";
import "../styles/general.css";
import axios from "axios";

class BolsosPage extends Component {

  constructor(props) {
    super(props);
    this.state = { productos: [] };
  }

  componentDidMount() {
    window.scrollTo(0, 0);
/*     let promesa = axios.get("/crudBolsos", {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      }
    });
    promesa.then(res => {

      this.setState({ productos: res.data });

    });
    promesa.catch(() => console.log("pailas")); */

    fetch("/productos")
    .then(res => res.json())
    .then(datos => {
      this.setState({
        productos: datos
      })
   });
  }

/* 
  refresh = () => {
    let promesa = axios.get("/productos", {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      }
    });
    promesa.then(res => {

      this.setState({ productos: res.data });

    });
    promesa.catch(() => console.log("pailas"));
  } */

  renderProductos(){
    return this.state.productos.map(p => <Catalogo productos={p} autenticado={this.props.autenticado} filtro={true} refresh={this.refresh} />);
  }

  render() {
    return (
      <React.Fragment>
        <div>
          <img className="imagen" src="https://res.cloudinary.com/drfggfn8f/image/upload/v1568479748/macco/bolsos/kbm6hsxlel13qoijtr9v.JPG" />
        </div>
        {this.renderProductos()}        
      </React.Fragment>
    );
  }
}

export default BolsosPage;