import React, { Component } from 'react';
import Calificacion from './calificacion';

class calificaciones extends Component {
    state={
        list:this.props.value.calificaciones
    }
    UNSAFE_componentWillReceiveProps(nextProps){

        this.setState({
            list: nextProps.value.calificaciones,
            
        });
    }
    render() {
        return (

            <div id="container">
                <h2>Reseñas</h2>
                            {this.state.list.map((e,i)=><Calificacion key={i} value={e} />)}
  
            </div>
        );
    }
}

export default calificaciones;