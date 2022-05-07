import React from "react";

import TextField from '@mui/material/TextField';

const Search = () => {
  return <div className='searcher'>
  <h1 className='h1-main'>¿Quieres completar tu Pokédex?</h1>
  <h1 className='h2-main'>Busca tu pokemon por su nombre o usando su número de la Pokédex!</h1>

  <TextField id="outlined-basic" label="Busca aquí tu pokemon" variant="filled" name='user' onChange={handleChange} className="search"/> 
</div>;
};

export default Search;
