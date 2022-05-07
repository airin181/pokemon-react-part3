import * as React from "react";
import { Link } from "react-router-dom";


function Nav() {

  const pages = ["Mi Pokédex", "Buscador", "Crear Pokemon"];

  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = (event) => {
    setAnchorElNav(null);
  };

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