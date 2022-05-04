import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PokeList from './PokeList/PokeList';


const Main = () => {

  //Llamamos a la función useState con valor inicial del estado falsy por defecto y nos devuelve dos constantes en un array. El primero es el estado actual y el segundo es el método para actualizar ese estado. 

  

  const [value, setValue] = useState(""); // Para guardar el dato a buscar
  const [pokemon, setPokemon] = useState([]); // Para guardar los pokemon

  /*   const [loading, setLoading] = useState(true) */



  useEffect(() => {

    if (value !== "") {
      async function axiosPokemon() {

        try {
          const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${value}`);
          const result = response.data;
          setPokemon([...pokemon,result]); 
         
          

        } catch (e) {
          setPokemon([]) 
        }
      }
      axiosPokemon();
    }
    //eslint-disable-next-line
  }, [value]); //cada vez que cambie value (estado) se vuelve a lanzar useEffect()

  //aqui guardo el valor del input del pokemon que se busca
  const handleSubmit = e => {
    e.preventDefault();
    const newPokemon = e.target.search.value
    setValue(newPokemon)
    e.target.search.value = ""
  };

  const removePokemon = (i) => {
    //recibe la posicion de entrada y busca en el array de datos y lo borras
    //FILTER: filtra un array, elimina el que cumpla una condición (posición i) y devuelve un nuevo array (sin ese elemento con posición i)
  const remainingPokemon = pokemon.filter((poke, j)=> i!== j);
  setPokemon(remainingPokemon);
}   


  return (
    <section className='main'>

      <div className='searcher'>
        <h1>Completa tu Pokédex introduciendo su nombre o su número identificador!</h1>
        <form onSubmit={handleSubmit} className="form-searcher">
          <input name="search" type="text" placeholder='Busca aquí tu pokemon' />
          <input type="submit" value="Buscar" />
        </form>
      </div>

        <PokeList value={pokemon} remove={(i) => removePokemon(i)}></PokeList>  

    </section>
  )

};


export default Main
