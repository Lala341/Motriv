import React, { Component } from "react";
import { HashRouter, Route } from "react-router-dom";
import NavBar from "./components/navBar/navbar";
import HomePage from "./components/homePage/homePage";
import BolsosPage from "./components/bolsosPage/bolsosPage";
import AretesPage from "./components/aretesPage/aretesPage";
import CollaresPage from "./components/collaresPage/collaresPage";
import PulserasPage from "./components/pulserasPage/pulserasPage";
import SwaroskyPage from "./components/swaroskiPage/swaroskyPage";
import NoviasPage from "./components/noviasPage/noviasPage";
import FileChooser from "./components/fileChooser/fileChooser";
import uploadPage from "./components/uploadPage/uploadPage";
import LoginForm from "./components/login/login";
import Footer from "./components/footer/footer";
import SideDrawer from "./components/sideDrawer/sideDrawer";


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      autenticado: false
    };
  }

  handleAuthentication = () => {
    this.setState({ autenticado: true });
  }

  handleCerrarSesion = () => {
    this.setState({ autenticado: false });
  }

  handleClick = (selectedTitle) => {
    this.setState({ isOpen: !this.state.isOpen, selected: selectedTitle });
  }

  render() {
    return (
      <HashRouter>
        <Route path="/" component={NavBar} />
        <Route path="/" component={HomePage} exact />
        <Route path="/administrador" render={(props) => <LoginForm {...props} autenticado={this.state.autenticado} handleAuthentication={this.handleAuthentication} handleCerrarSesion={this.handleCerrarSesion} />} exact />
        <Route path="/productos" render={(props) => <BolsosPage {...props} autenticado={this.state.autenticado} />} />
        <Route path="/productores" render={(props) => <AretesPage {...props} autenticado={this.state.autenticado} />} />
        <Route path="/collares" render={(props) => <CollaresPage {...props} autenticado={this.state.autenticado} />} />
        <Route path="/pulseras" render={(props) => <PulserasPage {...props} autenticado={this.state.autenticado} />} />
        <Route path="/swarosky" render={(props) => <SwaroskyPage {...props} autenticado={this.state.autenticado} />} />
        <Route path="/novias" render={(props) => <NoviasPage {...props} autenticado={this.state.autenticado} />} />
        <Route path="/" render={(props) => <Footer {...props} autenticado={this.state.autenticado} handleCerrarSesion={this.handleCerrarSesion} />} />
      </HashRouter>
    );
  }
}

export default App;
