import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActions } from '@mui/material';
import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import Card from '@mui/material/Card';
import { useDebounce } from "use-debounce";



function Detail() {

  const [pokemonDetails, setPokemonDetails] = useState("") //comprobar si se escribe uno repe
  
  const { id } = useParams() //aquí recojo el id de los query params
  const [debouncedId] = useDebounce(id, 2500) // valor de texto con retardo



  useEffect(() => {
    async function newFetch() {

      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${debouncedId}`);
      const result = await response.data;

      console.log(result);

      const pokemonName = result.name.charAt(0).toUpperCase() + result.name.slice(1);
      const type1 = result.types[0].type.name || "";
      const type2 = result.types[1] ? result.types[1].type.name : "";
      const ataque1 = result.moves[0].move.name 
      const ataque2 = result.moves[1].move.name 
      const ataque3 = result.moves[2].move.name 
      const ataque4 = result.moves[3].move.name 


   

      const pokemonInfo = {
        'name': pokemonName,
        'id': result.id,
        'type': result.types[0].type.name.charAt(0).toUpperCase() + result.types[0].type.name.slice(1),
        'image': result.sprites.other.dream_world.front_default,
        'types': type1,
        'height': result.height,
        'weight': result.weight,
        'main_attack': [ataque1, ataque2, ataque3,ataque4]
      }

      setPokemonDetails(pokemonInfo)
    }
    newFetch()


  }, [id])


  if (pokemonDetails) {
  return (
    <div className='details-div'>
      <Typography>Información ampliada de <b>{pokemonDetails.name} </b></Typography>
      <Card sx={{ width: 250, margin: 1 }} id="card-container">

        < CardMedia component="img" image={pokemonDetails.image} alt="pokemon" className='pokemon-img' sx={{ margin: 1 }} />
        <div className='card-content'>
          <CardContent >
            <Typography gutterBottom variant="h5" component="div"><b>{pokemonDetails.name}</b></Typography>
            <Typography><b>Número ID: </b>{pokemonDetails.id}</Typography>
            <Typography><b>Tipo: </b>{pokemonDetails.types}</Typography>
            
            <Typography><b>Height: </b>{pokemonDetails.height}</Typography>
            <Typography><b>Weight: </b>{pokemonDetails.weight}</Typography>
            <Typography><b>Main attacks:</b>{pokemonDetails.main_attack.map(p => <li>{p}</li>)} </Typography>

          </CardContent>

          <CardActions className='card-button'>
            <Button type="submit" id="close" component={Link} to="/pokedex">Volver a Pokédex</Button>
          </CardActions>
        </div>

      </Card>


    </div>
  )
}
}

export default Detail
