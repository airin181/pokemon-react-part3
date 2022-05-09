import { React, useContext } from "react";
import Card from './Card/Card'
import { v4 as uuidv4 } from 'uuid';
import { pokemonContext } from './../../../context/pokemonContext';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";


const PokeList = () => {

  const { pokemon } = useContext(pokemonContext)
  
  const paintPokemon = () => {
    return pokemon.map((poke, i) => <Card pokemon={poke} key={uuidv4()} />)
  }

  return (<div className="pokelist-div">

    <h1 className="h1-pokelist">Mi Pokédex</h1>
    <h3 className="h2-pokelist">Ten el control de los pokémon que ya has capturado y de cuáles te faltan</h3>

    

    <div className="pokelist-cards-div">
      {(pokemon.length !== 0
        ?
        paintPokemon()
        : (<div className="msg-btn">

        <Stack><Alert severity="warning">Dirígete al buscador para añadir pokémon a tu Pokédex 😃</Alert></Stack>
        <Button component={Link} to="/search" variant="contained" color="inherit" type="submit" sx={{ bgcolor: 'warning.light' }}>Ir al buscador</Button>

        </div>)
      )}
    </div>

  </div>)
};

export default PokeList;