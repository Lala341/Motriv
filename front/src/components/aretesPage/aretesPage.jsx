// eslint-disable-next-line no-unused-vars
import React, { Component } from "react";
// eslint-disable-next-line no-unused-vars
import NoDisponible from "../noDisponible/noDisponible";
import "../styles/general.css";

class AretesPage extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (<NoDisponible />);
  }
}

export default AretesPage;