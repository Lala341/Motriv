import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';


class RegistrarInstitucion extends Component {
    constructor(){
        super();
        this.state ={
            
                nombre: "",
                cantidad: "",
                precio: "",
                fechaCultivo: "",
                ubicacion: "",
                clima: "",
                calificaciones: [],
                descripcion: "",
                redirect:false,
            
            hasAgreed: false
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange=(e)=>{
        let target = e.target;

        let value = target.type === 'checkbox' ? target.checked:target.value;

        let name = target.name;

        this.setState({
            [name]:value 
        });
    }
    renderRedirect = () => { 
        if (this.state.redirect) { 
          return <Redirect to = '/instituciones' /> 
        } 
      } 
    handleSubmit=(e)=>{
        e.preventDefault();
        
        var data = {
            nombre: document.getElementById("1").value,
            cantidad: document.getElementById("2").value,
            precio: document.getElementById("3").value,
            fechaCultivo: document.getElementById("5"),
            ubicacion: document.getElementById("6").value,
            clima: document.getElementById("7").value,
            descripcion: document.getElementById("4"),
            calificaciones: []
        }

        fetch('/instituciones/', {
            method: 'POST', // or 'PUT'
            body: JSON.stringify(data), // data can be `string` or {object}!
            headers:{
              'Content-Type': 'application/json'
            }
          }).then(res => res.json())
          .catch(error => console.error('Error:', error))
          .then(response => {console.log('Success:', response);
          this.setState ({ 
            redirect: true 
          }) });
    }

    render() {
        return (
            <div>
                
            <div id="regins">
                <div className="text-center"
                ><h2>Registrar Institución</h2></div>
            
                <form onSubmit={this.handleSubmit} className="form-group">
                    <div >
                        <label >Nombre </label>
                        <input type="text" id="1" className="form-control" placeholder="Nombre "  ></input>
                    </div>
                    <div >
                        <label >Cantidad</label>
                        <input type="text" id="2" className="form-control" placeholder="Cantidad "  ></input>
                    </div>
                    <div >
                        <label >Precio </label>
                        <input type="text" id="3" className="form-control" placeholder="Precio "  ></input>
                    </div>
                    <div >
                        <label >Descripcion</label>
                        <textarea className="form-control" id="4" rows="3"></textarea>
                    </div>
                    
                    <div >
                        <label >Fecha Cultivo</label>
                        <input type="text" id="5" className="form-control" placeholder="Fecha Cultivo"  ></input>
                    </div>
                    <div >
                    
                        <label >Ubicacion</label>
                        <input type="text" id="6" className="form-control" placeholder="Ubicación"  ></input>
                   </div>
                    
                    <br></br>
                    
                    <div >
                        <label >Clima</label>
                        <input type="text" id="7" className="form-control" placeholder="Clima"  ></input>
                    </div>
                    <div >
                        <button onClick = { (event)=>{this.handleSubmit(event)} } className="btn btn-primary mt-3">Registrarse</button>
                    </div>
                </form>
                </div>
                {this.renderRedirect ()} 
                
                </div>
               
            
        );
    }
}

export default RegistrarInstitucion;