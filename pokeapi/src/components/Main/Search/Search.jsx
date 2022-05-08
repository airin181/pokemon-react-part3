import { React, useContext } from "react";
import Card from './../PokeList/Card/Card'
import {pokemonContext} from './../../../context/pokemonContext';
import { v4 as uuidv4 } from 'uuid';
import TextField from '@mui/material/TextField';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';


const Search = () => {

  const {setValue, lastPokemon, debouncedValue} = useContext(pokemonContext)
  console.log('clog 1pokemon en SEARCH --->', lastPokemon);


  /* const [repeated, setRepeated] = useState(false) //comprobar si se escribe uno repe
  const [notFound, setNotFound] = useState(false)*/

  //_________función para actualizar estado con el valor introducido en el input
  const handleChange = e => {
    e.preventDefault();
    setValue(e.target.value.toLowerCase())
  };


  return <div className='searcher'>
  <h1 className='h1-search'>¿Quieres completar tu Pokédex?</h1>
  <h1 className='h2-search'>Busca tu pokemon por su nombre o usando su número de la Pokédex!</h1>

      
    <TextField id="outlined-basic" label="Busca aquí tu pokemon" variant="filled" name='user' onChange={handleChange} className="search"/> 
    {debouncedValue? <Card pokemon={lastPokemon}/>:""}
    
             
        

</div>;
     /*{repeated ? <Stack><Alert severity="warning">¡No puede haber pokemon repetidos! Inténtalo de nuevo 😃</Alert></Stack> : "" }
      {notFound ? <Stack><Alert severity="error">¡No se ha encontrado el pokemon que indicas! ¿Estás seguro de que lo has escrito bien? 😃</Alert></Stack> : "" }
 */
    };

export default Search;
