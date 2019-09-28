import React, { Component } from 'react';

class calificacion extends Component {
    state={
        image:"https://img.pngio.com/parent-directory-avatar-2png-avatar-png-256_256.png",
        descripcion:this.props.value.descripcion,
        puntaje:this.props.value.puntaje,

    }
    UNSAFE_componentWillReceiveProps(nextProps){

        this.setState({
            descripcion:nextProps.value.descripcion,
        puntaje:nextProps.value.puntaje,

        });
    }
    render() {
        return (
            <div className="calificacion">
            <div className="row">
                <div className="col-3">
                <img src={this.state.image} className="img-fluid" alt="Institution" width="300" height="300"></img>

                </div>
                <div className="col-7">
<h3>{this.state.puntaje}</h3>
<h4>Descripción</h4>

<h5>{this.state.descripcion}</h5>

                </div>
            </div>
            </div>
        );
    }
}

export default calificacion;