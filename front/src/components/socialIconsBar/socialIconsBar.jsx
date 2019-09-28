// eslint-disable-next-line no-unused-vars
import React, { Component } from "react";
import "./socialIconsBar.css";
import facebook from "./facebook.svg";
import instagram from "./instagram.svg";
import whatsapp from "./whatsapp.svg";

class SocialIconsBar extends Component {

  constructor(props) {
    super(props);
    this.state = {
      redes: [
        {
          nombre: "facebook",
          imagen: facebook,
          url: "https://www.facebook.com/MACCO-accesorios-106017357411348/"
        },
        {
          nombre: "instagram",
          imagen: instagram,
          url: "https://www.instagram.com/macco__accesorios/"
        },
        {
          nombre: "whatsapp",
          imagen: whatsapp,
          url: "https://wa.me/573208478097"
        }
      ]
    };
  }

  render() {
    return (
      <ul className="lista">
        {this.state.redes.map(
          red =>
            <li className="itemLista">
              <a href={red.url}>
                <img id={red.nombre} src={red.imagen} />
              </a>
            </li>
        )}
      </ul>
    );
  }
}

export default SocialIconsBar;