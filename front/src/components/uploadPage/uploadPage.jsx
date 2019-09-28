// eslint-disable-next-line no-unused-vars
import React, { Component } from "react";
import "./uploadPage.css";
// eslint-disable-next-line no-unused-vars
import FileChooser from "../fileChooser/fileChooser";
import axios from "axios";
import purse from "./shopping-bag.svg";

class UploadPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      autenticado: false,
      namePage: "Macco Accesorios",
      nameValue: null,
      descriptionValue: null,
      cantidadValue: null,
      precioValue: null,
      imagenValue: null,
      promocionValue: false,
      colorValue: null,
      tamanoValue: null,
      imgsUploaded: false,
      descripcion: {
        width: "100%",
        height: "20px",
      }
    };
    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangeDescription = this.handleChangeDescription.bind(this);
    this.handleChangeTamano = this.handleChangeTamano.bind(this);
    this.handleChangePromocion = this.handleChangePromocion.bind(this);
    this.handleChangeCantidad = this.handleChangeCantidad.bind(this);
    this.handleChangePrecio = this.handleChangePrecio.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.receiveURLs = this.receiveURLs.bind(this);
    this.handleChangeColor = this.handleChangeColor.bind(this);

  }


  handleSubmit(event) {
    alert("A name was submitted: " + this.state.nameValue);
    event.preventDefault();
    let bolso = {};
    bolso.nombre = this.state.nameValue;
    bolso.precio = this.state.precioValue;
    bolso.color = this.state.colorValue;
    bolso.tamaño = this.state.tamanoValue;
    bolso.imagen = this.state.imagenValue;
    bolso.cantidad = this.state.cantidadValue;
    bolso.promocion = this.state.promocionValue;

    let promesa1 = axios.post("/crudBolsos", bolso);
    // eslint-disable-next-line no-unused-vars
    promesa1.then((res) => {
      this.props.refresh();
      this.props.handleClose();
    });
    promesa1.catch(() => alert("no se pudo comunicar con el servidor"));
  }


  handleChangeName(event) {
    this.setState({ nameValue: event.target.value });
  }
  handleChangeColor(col) {
    this.setState({ colorValue: col });
  }
  handleChangeDescription(event) {
    this.setState({ descriptionValue: event.target.value });
  }
  handleChangeCantidad(event) {
    this.setState({ cantidadValue: event.target.value });
  }
  handleChangeTamano(valor) {
    this.setState({ tamanoValue: valor });
  }
  handleChangePromocion() {
    // eslint-disable-next-line no-unused-vars
    let promo = !this.state.promocionValue;
    this.setState({ promocionValue: promo });
  }
  handleChangePrecio(event) {
    this.setState({ precioValue: event.target.value });
  }
  receiveURLs(URL) {
    this.setState({
      imagenValue: URL,
      imgsUploaded: true,
    });
  }



  render() {
    return (
      <div>
        <span className=""> Agregar un producto al catalogo</span>
        <form className="centrarTodo" onSubmit={this.handleSubmit}>
          <div id="lineaVerde" className=""></div>
          <div className="">
            <div className="fila">
              <div id="fila" className="">
                <input type="text" placeholder="nombre" className="nombre" name="nombre" value={this.state.nameValue} onChange={this.handleChangeName} />
              </div>

            </div>
            <div id="lineaRoja" ></div>
            {
              this.state.imgsUploaded && <div>
                <img id="imagenPreview" src={this.state.imagenValue} alt={this.state.descriptionValue} /> </div>
            }

            <FileChooser receiveURLs={this.receiveURLs} />
            <div id="lineaRoja" ></div>
            <div className="fila">
              <input className="descripcion" onKeyPress={this.resize} height="40px" name="description" placeholder="Describa el producto aqui" value={this.state.descripcionValue} onChange={this.handleChangeDescription} />
            </div>
            <div id="lineaRoja" ></div>
            <div className="fila">
              <input type="number" placeholder="precio" className="precio" min="0" name="precio" value={this.state.precioValue} onChange={this.handleChangePrecio} />
              <input type="number" placeholder="cantidad" className="cantidad" min="0" name="cantidad" value={this.state.cantidadValue} onChange={this.handleChangeCantidad} />
            </div>
            <div id="lineaRoja" ></div>
            <div className="fila">
              <button type="button" className="pequeno">
                <img className="imagenTamaño" src={purse} alt="flat_icon_purse" onClick={() => this.handleChangeTamano("pequeno")} />
                {(this.state.tamanoValue === "pequeno") &&
                  <div className="tamañoSeleccionado" />
                }
              </button>
              <button type="button" value="mediano" onClick={() => this.handleChangeTamano("mediano")} className="mediano">
                <img className="imagenTamaño" src={purse} alt="flat_icon_purse" />
                {(this.state.tamanoValue === "mediano") &&
                  <div className="tamañoSeleccionado" />
                }
              </button>
              <button type="button" className="grande" onClick={() => this.handleChangeTamano("grande")}>
                <img className="imagenTamaño" src={purse} alt="flat_icon_purse" />
                {(this.state.tamanoValue === "grande") &&
                  <div className="tamañoSeleccionado" />
                }
              </button>
            </div>
            <div id="lineaRoja" ></div>
            <div className="fila">
              <div>
                <button type="button" id="negro" onClick={() => this.handleChangeColor("negro")}>Negro
                </button>
                {(this.state.colorValue === "negro") &&
                  <div className="colorSeleccionado" />
                }
              </div>
              <div>
                <button type="button" id="blanco" onClick={() => this.handleChangeColor("blanco")}>blanco
                </button>
                {(this.state.colorValue === "blanco") &&
                  <div className="colorSeleccionado" />
                }
              </div>
              <div>
                <button type="button" id="azul" onClick={() => this.handleChangeColor("azul")}>azul
                </button>
                {(this.state.colorValue === "azul") &&
                  <div className="colorSeleccionado" />
                }
              </div>
              <div>
                <button type="button" id="azulClaro" onClick={() => this.handleChangeColor("azulClaro")}>azulClaro
                </button>
                {(this.state.colorValue === "azulClaro") &&
                  <div className="colorSeleccionado" />
                }
              </div>
              <div>
                <button type="button" id="fucsia" onClick={() => this.handleChangeColor("fucsia")}>fucsia
                </button>
                {(this.state.colorValue === "fucsia") &&
                  <div className="colorSeleccionado" />
                }
              </div>
              <div>
                <button type="button" id="cafe" onClick={() => this.handleChangeColor("cafe")}>cafe
                </button>
                {(this.state.colorValue === "cafe") &&
                  <div className="colorSeleccionado" />
                }
              </div>
              <div>
                <button type="button" id="verde" onClick={() => this.handleChangeColor("verde")}>verde
                </button>
                {(this.state.colorValue === "verde") &&
                  <div className="colorSeleccionado" />
                }
              </div>
              <div>
                <button type="button" id="rosado" onClick={() => this.handleChangeColor("rosado")}>rosado
                </button>
                {(this.state.colorValue === "rosado") &&
                  <div className="colorSeleccionado" />
                }
              </div>
              <div>
                <button type="button" id="avano" onClick={() => this.handleChangeColor("avano")}>avano
                </button>
                {(this.state.colorValue === "avano") &&
                  <div className="colorSeleccionado" />
                }
              </div>
              <div>
                <button type="button" id="amarillo" onClick={() => this.handleChangeColor("amarillo")}>amarillo
                </button>
                {(this.state.colorValue === "amarillo") &&
                  <div className="colorSeleccionado" />
                }
              </div>
              <div>
                <button type="button" id="rojo" onClick={() => this.handleChangeColor("rojo")}>rojo
                </button>
                {(this.state.colorValue === "rojo") &&
                  <div className="colorSeleccionado" />
                }
              </div>
            </div>
            <div id="lineaRoja"></div>
            <div className="fila">
              <button type="button" id="promocion" >Promocion
              </button>
              <label className="switch">
                <input id="PROMO" type="checkbox" name="precio" defaultChecked={this.state.promocionValue} onChange={() => this.handleChangePromocion()} />
                <span className="slider"></span>
              </label>
            </div>
            <div id="lineaRoja" ></div>


            <div className="fila"></div>
            <div id="lineaVerde" className=""></div>
            <div className="fila">
              <input type="submit" className="botonFormulario" min="0" name="precio" value="Guardar" />
            </div>
          </div>
        </form>
      </div >



    );
  }
}

export default UploadPage;