import React, { Component } from 'react';
import InstitucionList from './institucionList';



class home extends Component {

    
    render() {
        return (
            <div className="container">

<div className="logotipo">
<img src="https://i.ibb.co/CP2nVfS/04030091-1f7b-42c6-b7d5-882d7c3a2c5c.jpg" className="img-fluid" alt="Institution" width="600" height="200"></img>
</div>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
                <div className="row">
                    <div className="col-1"></div>
                     <div className="col-5">
                         <div className="cont-img">
                         <img id="imghome"src="https://i.ibb.co/CP2nVfS/04030091-1f7b-42c6-b7d5-882d7c3a2c5c.jpg" alt="Italian Trulli"/>
                         </div>
                    </div>
                    <div className="col-5">
                    <h4 align="center"id="titulohome"> Encuentra el mejor lugar para aprender el idioma que deseas y descubre cursos con diferentes niveles de dificultad. Además tendrás la oportunidad de calificar los cursos que tomes</h4>

                    <div className="col-1"></div>
 
                </div>
                
               </div>
               <div className="row">
                   <br></br> 
                   <br></br>            
                <h2>Instituciones</h2>   
                              <InstitucionList ></InstitucionList>
                         

            </div>
            </div>
            
            
        );
    }
}

export default home;