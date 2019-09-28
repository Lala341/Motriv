import React, { Component } from 'react';
import InstitucionList from './institucionList';
import "../comp-css/home.css";



class home extends Component {

    
    render() {
        return (
            <div className="container">

<div className="logotipo">
<img src="https://i.ibb.co/CP2nVfS/04030091-1f7b-42c6-b7d5-882d7c3a2c5c.jpg" className="img-fluid" id="logo" alt="Institution" width="600" height="50"></img>
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
                    <div className="col-5 mt-5">
                    <h4 align="center"id="titulohome"> Motriv es una plataforma web que nos permite vender los productos del campo sin intermediarios y a un mejor precio.</h4>

                    <div className="col-1"></div>
 
                </div>
                
               </div>
               <div className="row mt-5">        
                <InstitucionList ></InstitucionList>
            </div>
            </div>
            
            
        );
    }
}

export default home;