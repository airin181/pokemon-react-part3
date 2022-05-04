import React from 'react'
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import {CardMedia, Button, CardActions} from '@mui/material';



function CardPokemon ({value, remove}) {

  const img = value.sprites.other.dream_world.front_default ? value.sprites.other.dream_world.front_default :  ""

  return (
    
    <Card sx={{ width: 250, margin:1 }}>
      < CardMedia component="img" height="250" image={img} alt="pokemon" className='pokemon-img'/> 
      <CardContent>
        <Typography gutterBottom variant="h5" component="div"><b>{(value.name).charAt(0).toUpperCase()+(value.name).slice(1)}</b></Typography>
        {value.types.map(type=>{return <Typography><b>Type: </b>{type.type.name}</Typography>})}
        <Typography variant="body2"><b>Weight: </b> {value.weight} kg</Typography>
      </CardContent>
      <CardActions>
            <Button onClick={remove}>Borrar</Button>
            <Button size="small">❤</Button>
          </CardActions>
    </Card> 

  )
}

export default CardPokemon
