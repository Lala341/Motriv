import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';


class RegistrarInstitucion extends Component {
    constructor(){
        super();
        this.state ={
            
                nombre: "",
                horario: "",
               sedes: [],
                calificaciones: [
                ],
                cursos: [],
                descripcion: "",
                correo: "",
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
            horario: document.getElementById("21").value+"-"+document.getElementById("22").value,
            sedes: [
                document.getElementById("s11").value+"//"+document.getElementById("s12").value,
                document.getElementById("s21").value+"//"+document.getElementById("s22").value
            ],
            calificaciones: [
            ],
            cursos: [],
            descripcion: document.getElementById("3").value,
            correo: document.getElementById("4").value
        
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
                        <label >Horario-Hora inicio </label>
                        <input type="text" id="21" className="form-control" placeholder="Hora "  ></input>
                    </div>
                    <div >
                        <label >Horario-Hora fin </label>
                        <input type="text" id="22" className="form-control" placeholder="Hora "  ></input>
                    </div>
                    <div >
                        <label >Descripcion</label>
                        <textarea className="form-control" id="3" rows="3"></textarea>
                    </div>
                    
                    <div >
                        <label >correo</label>
                        <input type="text" id="4" className="form-control" placeholder="email"  ></input>
                    </div>
                    <div >
                    
                        <label >Dirección</label>
                        <input type="text" id="s11" className="form-control" placeholder="Direccion sede"  ></input>
                   </div>
                    
                    <div >
                        <label >Telefono</label>
                        <input type="number" id="s12" className="form-control" placeholder="Telefono sede"  ></input>
                    </div>
                    
                    <br></br>

                    <div >
                       
                        <label >Dirección</label>
                        <input type="text" id="s21" className="form-control" placeholder="Direccion sede"  ></input>
                   </div>
                    
                    <div >
                        <label >Telefono</label>
                        <input type="number" id="s22" className="form-control" placeholder="Telefono sede"  ></input>
                    </div>
                    <div >
                        <button onClick = { (event)=>{this.handleSubmit(event)} } className="btn btn-primary">Registrarse</button>
                    </div>
                </form>
                </div>
                {this.renderRedirect ()} 
                
                </div>
               
            
        );
    }
}

export default RegistrarInstitucion;