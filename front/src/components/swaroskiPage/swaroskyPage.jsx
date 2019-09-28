// eslint-disable-next-line no-unused-vars
import React, { Component } from "react";
// eslint-disable-next-line no-unused-vars
import NoDisponible from "../noDisponible/noDisponible";

class SwaroskyPage extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (<NoDisponible />);
  }
}

export default SwaroskyPage;