import React, { Component } from "react";
import logo from './../../assets/logo.svg'

class Header extends Component {
  render() {
    return <div className='header'>

     
      <img src={logo} alt="logo pokemon" />
      <h3>Busca tu favorito y hazte con todos</h3>
      
    </div>;
  }
}

export default Header;


