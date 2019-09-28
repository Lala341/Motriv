import React, { Component } from 'react';
import CardInstitucion from './cardInstitucion';

class InstitucionList extends Component {
    state={
        list: []
    }
    componentDidMount(){

        fetch("/instituciones/").then(res => res.json()).then(m=>{console.log(m);console.log("2");this.setState({
            list:m
            
        })});
    }
    render() {
        
        return (
            <div className="row">
                           {this.state.list.map((e,i)=>
                               
                              <CardInstitucion value={e} key={i}></CardInstitucion>
                            )}

            </div>
        );
    }
}

export default InstitucionList;