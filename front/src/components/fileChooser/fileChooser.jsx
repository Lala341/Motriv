import React, { Component } from "react";
import axios from "axios";

class FileChooser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [],
      imageUrls: [],
      message: "",
      imagen_main_url: null,
    }
  }
  selectImages = (event) => {
    let images = []
    for (var i = 0; i < event.target.files.length; i++) {
      images[i] = event.target.files.item(i);
    }
    images = images.filter(image => image.name.match(/\.(JPG|jpeg|png|gif)$/))
    let message = `${images.length} valid image(s) selected`
    this.setState({ images, message })
  }

  uploadImages = () => {
    const uploaders = this.state.images.map(image => {
      const fd = new FormData();
      fd.append("image", image, image.name);
      axios.post("/images/uploadBolso", fd, {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        }
      })
        .then(res => {
          console.log(res.data)
          console.log(this.state);
          this.props.receiveURLs(res.data);
        }).then(
          console.log(this.state)

        )
        .catch(() => console.log(`no se pudo subir la imagen ${image.name}`))

    });
  }

  showState() {

  }

  mongo = () => {
    let promesa = axios.get("/crudBolsos/mateo", {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      }
    });
    promesa.then(res => {
      console.log(res);
    });
    promesa.catch(() => console.log("pailas"));
  }

  render() {
    return (
      <div>
        <br />
        <div >
          <h1>Sube una imagen</h1><hr />
          <div >
            <input className="botonFormulario" className="form-control " type="file"
              onChange={this.selectImages} multiple />
          </div>
          <p className="text-info">{this.state.message}</p>
          <div>
            <button className="botonFormulario" type="button" value="Submit"
              onClick={this.uploadImages}>Agregar
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default FileChooser;