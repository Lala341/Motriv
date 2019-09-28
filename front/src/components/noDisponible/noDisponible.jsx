// eslint-disable-next-line no-unused-vars
import React, { Component } from "react";

class NoDisponible extends Component {
  render() {
    return (
      <React.Fragment>
        <div className='contenedor'>
          <img src="https://img.icons8.com/ios-filled/100/000000/image-not-avialable.png" />
        </div>
        <h1>Oops! MACCO aún no tiene estos articulos disponibles</h1>
        <h2>Siguenos en nuestras redes y te avisaremos cada vez que tengamos productos nuevos</h2>
      </React.Fragment>
    );
  }
}

export default NoDisponible;