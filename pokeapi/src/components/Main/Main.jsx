import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from './Card/Card'


const Main = () => {

  //Llamamos a la función useState con valor inicial del estado falsy por defecto y nos devuelve dos constantes en un array. El primero es el estado actual y el segundo es el método para actualizar ese estado. 

  const [value, setValue] = useState(""); // Para guardar el dato a buscar
  const [pokemon, setPokemon] = useState(""); // Para guardar los pokemon
  /*   const [loading, setLoading] = useState(true) */
  console.log('clog de pokemon', pokemon);

  // equivale a un componentDidUpdate()
  useEffect(() => {

    if (value !== "") {
      async function axiosPokemon() {

        try {
          // Petición HTTP
          const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${value}`);
          const result = response.data;

          // Guarda en el array de pokemon el resultado (un obj de 1 pokemon). Procesa los datos.
          /*         setTimeout(() => {
                    setResult(response.data)
                    setLoading(false)
                }, 5000);*/
                  setPokemon(result); 

        } catch (e) {
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


  return (
    <section className='main'>
      <div className='searcher'>
        <h1>Completa tu Pokédex!</h1>
        <form onSubmit={handleSubmit} className="form-searcher">
          <input name="search" type="text" placeholder='Busca aquí tu pokemon' />
          <input type="submit" value="Buscar" />
        </form>
      </div>

      {pokemon
        ? <Card key={pokemon.id} value={pokemon}/> : ""}
    </section>
  )

};


export default Main
