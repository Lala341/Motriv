import React, { Component } from 'react';

class login extends Component {
    state={
      method: this.props.value,
      shouldHide: true
    }
    componentDidMount(){
        
      console.log(localStorage.getItem("user"));
      if(localStorage.getItem("user")!=null){
        let user= JSON.parse(localStorage.getItem("user"));
      
        this.state.method(user,true);
      }
    }

    autentication= (event) => {
      event.preventDefault();
        
     let user={usuario:document.getElementById("loginUser").value ,password: document.getElementById("passwordUser").value };
     let g="/usuarios/"+user.usuario;
     console.log((this.state.method));
     fetch(g).then(res => res.json()).then(m=>{
     console.log(m);
     if(m.password===user.password){
      localStorage.setItem("user",JSON.stringify(m));
      this.state.method(m,true);
  }
  else{
    this.setState(
    {shouldHide: false});
  }
});
    }
    render() {
        return (
            <div>
                <br></br>
                <br></br>
                <div  className="col-8">  
                <div id="divlogin" className="text-center">
                
     <form>

  <div className="form-group">
    <label >User</label>
    <input id="loginUser" type="user" className="form-control"   placeholder="Enter user"></input>
  </div>
  <div className="form-group">
    <label >Password</label>
    <input id="passwordUser" type="password" className="form-control" placeholder="Enter password"></input>
  </div>
  <div hidden={this.state.shouldHide} id="incorrecto" className="alert alert-danger" role="alert">
  Usuario o contraseña incorrectos, por favor intente de nuevo.
</div>
  <button onClick = { (event)=>{this.autentication(event)} } className="btn btn-primary">Submit</button>

</form>

</div> 
</div>

</div>


        );
    }
}

export default login;