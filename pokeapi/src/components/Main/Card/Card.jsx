import React from 'react'
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import {CardMedia} from '@mui/material';



function CardPokemon (props) {

  const data = props.value
  console.log('c.log de data en card: ',data);
  const img = data.sprites.other.dream_world.front_default /* ? data.sprites.other.dream_world.front_default :  "" */


  return (
    
    <Card sx={{ width: 500 }}>
      <CardContent>
        
      < CardMedia component="img" height="540" image={img} alt="pokemon" className='pokemon-img'/> 
      
        <Typography><b>{(data.name).charAt(0).toUpperCase()+(data.name).slice(1)}</b></Typography>
        {data.types.map(type=>{return <Typography><b>Type:</b>{type.type.name}</Typography>})}
        <Typography><b>Weight:</b> {data.weight} kg</Typography>
      </CardContent>
    </Card> 
  )
}

export default CardPokemon
