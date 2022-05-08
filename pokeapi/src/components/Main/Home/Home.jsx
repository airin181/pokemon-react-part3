import React from "react";
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';
import banner from './../../../assets/banner.webp'


const Home = () => {

  return <section className='home'>
  <img src={banner} alt="banner" className="banner"/>
  <h1 className='h1-home'>¡Bienvenid@ a tu Pokédex!</h1>
  <h1 className='h2-home'>¿Qué quieres hacer?</h1>

<div className="home-buttons">

    <Button component={Link} to="/form" variant="contained" color="inherit" type="submit" >
        Quiero crear un Pokémon
    </Button>

    <Button component={Link} to="/pokedex" variant="contained" color="inherit" type="submit" >
        Quiero ver mi Pokédex
    </Button>

    <Button component={Link} to="/search" variant="contained" color="inherit" type="submit" >
        Quiero buscar más Pokémon
    </Button>

</div>

  </section>
}
export default Home;
