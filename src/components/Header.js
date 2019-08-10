import React, { Component } from "react";
import logo from "../assets/logo.png";
class Header extends Component {
  render() {
    return (
      <header>
        <img className="logo" src={logo} alt="" />
      </header>
    );
  }
}

export default Header;
