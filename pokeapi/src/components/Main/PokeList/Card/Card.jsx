import { React } from "react";
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import {CardMedia, Button, CardActions} from '@mui/material';
import { Link } from "react-router-dom";




function CardPokemon ({pokemon}) {

 
  return (
    
    <Card sx={{ width: 250, margin:1 }} id="card-container">

      < CardMedia component="img" image={pokemon.image} alt="pokemon" className='pokemon-img'sx={{ margin:1 }}/>
      <div className='card-content'>
      <CardContent >
        <Typography gutterBottom variant="h5" component="div"><b>{pokemon.name}</b></Typography>
        <Typography><b>Número ID: </b>{pokemon.id}</Typography>
        <Typography><b>Tipo: </b>{pokemon.type}</Typography>
        </CardContent> 
      <CardActions className='card-button'>
        <Button type="submit" id="toDetail" component={Link}  to={`pokemon/${pokemon.id}`}>Ver detalles</Button>
      </CardActions>
      </div>

    </Card> 

  )
}

export default CardPokemon
