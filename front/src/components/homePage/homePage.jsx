// eslint-disable-next-line no-unused-vars
import React, { Component } from "react";
import "./homePage.css";
// eslint-disable-next-line no-unused-vars
import BlurredCarousel from "../blurredCarousel/blurredCarousel";
// eslint-disable-next-line no-unused-vars
import Catalogo from "../catalogo/catalogo";

class HomePage extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  constructor(props) {
    super(props);
    this.state = {
      productosDestacados: [
        {
          imagen: "http://agriculturers.com/wp-content/uploads/2015/02/arroz_trans_china-c.jpg",
          nombre: "Arroz",
          cantidad: "12",
          medida: "Arroba",
          precio: "140000"
        },
        {
          imagen: "http://static.t13.cl/images/sizes/1200x675/1546857604-105063677banano2.jpg",
          nombre: "Platano",
          cantidad: "15",
          medida: "Arroba",
          precio: "600000"
        },
        {
          imagen: "https://cosechafresca.com.co/tienda/wp-content/uploads/2019/06/curuba-416x277.jpg",
          nombre: "Curuba",
          cantidad: "23",
          medida: "Arroba",
          precio: "140000"
        }
      ]
    };
  }
  render() {
    return (
      <React.Fragment>
        <BlurredCarousel />
        <h1>Productos Destacados</h1>
        <Catalogo productos={this.state.productosDestacados} filtro={false} />
      </React.Fragment>
    );
  }
}

export default HomePage;