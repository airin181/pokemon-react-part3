import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import Card from '@mui/material/Card';



function Detail() {

  const [pokemonDetails, setPokemonDetails] = useState("");
  const { id } = useParams();
  console.log('clog de pokemonDetails --->', pokemonDetails);


  useEffect(() => {

    async function getPokemonDetails(id) {

      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
      const result = await response.result;

      const type1 = result.types[0].type.name || "";
      const type2 = result.types[1] ? result.types[1].type.name : "";

      const pokemonObj = {

        name: result.name,
        image: result.sprites.other.dream_world.front_default,
        gif: result.sprites.versions['generation-v']['black-white'].animated.front_default || result.sprites.front_default,
        id: result.id,
        type_1: type1,
        type_2: type2,
        height: result.height,
        weight: result.weight,
        statsBase: {
          one: result.stats[0].base_stat,
          two: result.stats[1].base_stat || "",
          three: result.stats[2].base_stat || "",
          four: result.stats[3].base_stat || "",
          five: result.stats[4].base_stat || "",
          six: result.stats[5].base_stat || ""
        }
      }
      setPokemonDetails(pokemonObj);
    }
    getPokemonDetails()
  }
    // eslint-disable-next-line
    , [id]
  )
  if (!pokemonDetails) return

  function createData(name, Hp, Attack, Defense, Special_attack, Special_defense, Speed) {
    return { name, Hp, Attack, Defense, Special_attack, Special_defense, Speed };
  }

  const rows = [
    createData('Base stats', pokemonDetails.statsBase.one, pokemonDetails.statsBase.two, pokemonDetails.statsBase.three, pokemonDetails.statsBase.four, pokemonDetails.statsBase.five, pokemonDetails.statsBase.six)
  ];


  return (
    <div>
      <p>AQUÍ EN TEORÍA VA EL DETALLE</p>
      <Card sx={{ width: 250, margin: 1 }} id="card-container">

        < CardMedia component="img" image={pokemonDetails.image} alt="pokemon" className='pokemon-img' sx={{ margin: 1 }} />
        <div className='card-content'>
          <CardContent >
            <Typography gutterBottom variant="h5" component="div"><b>{pokemonDetails.name}</b></Typography>
            <Typography><b>Número ID: </b>{pokemonDetails.id}</Typography>
            <Typography><b>Tipo 1: </b>{pokemonDetails.type1}</Typography>
            {pokemonDetails.type2 ? <Typography><b>Tipo 2: </b>{pokemonDetails.type2}</Typography>:""}
            <Typography><b>Height: </b>{pokemonDetails.height}</Typography>
            <Typography><b>Weight: </b>{pokemonDetails.weight}</Typography>
            < CardMedia component="img" image={pokemonDetails.gif} alt="pokemon" className='pokemon-gif' sx={{ margin: 1 }} />
          </CardContent>

          <CardActions className='card-button'>
            <Button type="submit" id="close" component={Link} /* onSubmit={} */>Cerrar</Button>
          </CardActions>
        </div>

      </Card>


    </div>
  )
}

export default Detail
