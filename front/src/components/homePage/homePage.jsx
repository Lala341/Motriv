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
          imagen: "https://res.cloudinary.com/drfggfn8f/image/upload/v1568469505/macco/bolsos/eik0rmakvxoy75ndc1ff.JPG",
          nombre: "Tula Hermes",
          precio: "140000"
        },
        {
          imagen: "https://res.cloudinary.com/drfggfn8f/image/upload/v1568469506/macco/bolsos/aqjej6fhr6vgyherv1nc.JPG",
          nombre: "Buyuwant",
          precio: "250000"
        },
        {
          imagen: "https://res.cloudinary.com/drfggfn8f/image/upload/v1568469503/macco/bolsos/mqlbjdsibeahnblt68cg.JPG",
          nombre: "Hexagonal Pequeño",
          precio: "60000"
        },
        {
          imagen: "https://res.cloudinary.com/drfggfn8f/image/upload/v1568253636/macco/bolsos/randflmwmgrenm4s4dcn.JPG",
          nombre: "Bolso de Lujo Lacatu",
          precio: "250000"
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