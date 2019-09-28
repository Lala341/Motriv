import React from "react";
import {render }from "react-dom";
import { BrowserRouter} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./style.css";
import "./comp-css/institucion.css";
import App from "./components/app";



render((
    <div>
        
    <BrowserRouter>
        <App/>
    </BrowserRouter>
    </div>
), document.getElementById('root'));