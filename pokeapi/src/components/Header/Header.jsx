import Nav from './Nav';
import logo from "./../../assets/logo.svg";
import React from 'react'

function Header() {
  return (
    <div className="header">
      <img src={logo} alt="pokedex logo" id="logo-pokedex" sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
      <Nav />
    </div>
  )
}

export default Header


