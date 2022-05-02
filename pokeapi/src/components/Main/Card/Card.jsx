import React from 'react'
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';


function CardPokemon (props) {

  const data = props.value
  console.log('c.log de data en card: ',data);

  return (
    
    <Card sx={{ width: 500 }}>
      <CardContent>
        <img src={data.sprites.front_default} alt="Default front" />
        <Typography>{(data.name).charAt(0).toUpperCase()+(data.name).slice(1)}</Typography>
        <div> Types:{data.types.map(type=>{return <p>{type.type.name}</p>})}</div>
        <Typography>Weight: {data.weight} kg</Typography>
       
      </CardContent>
    </Card> 
  )
}

export default CardPokemon
