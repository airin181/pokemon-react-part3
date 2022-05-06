import React, { Component } from "react";
import logo from './../../assets/logo.svg'
import Nav from './Nav';

class Header extends Component {
  render() {
    return <div className='header'>

     
      <img src={logo} alt="logo pokemon" />
      <h3>Hazte con todos!</h3>
      <Nav/>
      
    </div>;
  }
}

export default Header;


