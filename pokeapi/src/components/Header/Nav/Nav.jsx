import * as React from "react";
import { Link } from "react-router-dom";


function Nav() {

 
  

  return (
    <div className="navbar-div">

        <Link to="/" className="nav__element">Home</Link> 
        <Link to="/pokedex" className="nav__element">Mi Pokédex</Link>
        <Link to="/form" className="nav__element">Crear pokemon</Link>
        <Link to="/search" className="nav__element">Buscador</Link>
    





    </div>
  )
}

export default Nav