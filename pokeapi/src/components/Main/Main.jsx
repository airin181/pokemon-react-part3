import React, { useEffect, useState } from 'react';
//import Card from './Card/Card'
import axios from 'axios';
import Card from './Card/Card'

const Main = () => {

  //Llamamos a la función useState con valor inicial del estado falsy por defecto y nos devuelve dos constantes en un array. El primero es el estado actual y el segundo es el método para actualizar ese estado. 
  
  const [value, setValue] = useState(""); // Para guardar el dato a buscar
  const [pokemon, setPokemon] = useState(""); // Para guardar los pokemon
  console.log('de pokemon',pokemon);
  
  // equivale a un componentDidUpdate()
  useEffect(() => {
    
    if (value !== "") {
    async function axiosPokemon() {

      try{
        // Petición HTTP
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${value}`);
        const result = response.data;
        console.log('de result',result);

        // Guarda en el array de pokemon el resultado (un obj de 1 pokemon). Procesa los datos.
        setPokemon(result);

      } catch(e){
        setPokemon([]) // No pintes nada
      }
    }
  
    axiosPokemon();
  }
  }, [value]);

  const handleSubmit = e => {
    e.preventDefault();
    setValue(e.target.search.value.toLowerCase()) // Modificando el estado de Value
    e.target.search.value = ""
  };



  return (<section>

    <h1>Búsqueda por pokemon</h1>
    <form onSubmit={handleSubmit}>
      <input name="search" type="text" placeholder='Busca aquí tu pokemon'/>
      <input type="submit" value="Buscar"/>
    </form>

      {pokemon?
        <Card key={pokemon.id} value={pokemon}/>
      : ""} 
    </section>)
  
};

//el estado pokemon no es igual a cero? Tiene algo ese array? Si tiene algo, renderiza un ul con clase topics y por cada pokemon que haya me sacas un li con los datos que le queramos sacar. En este caso --> 
export default Main
