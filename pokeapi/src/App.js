import React, { useEffect, useState } from 'react';
import Main from './components/Main/Main'
import Header from './components/Header'
import Footer from './components/Footer/Footer'
import './styles/styles.scss'
import axios from 'axios';

import {BrowserRouter} from 'react-router-dom';
import {pokemonContext} from './context/pokemonContext';
import { useDebounce } from "use-debounce";
import { useSearchParams, Link } from "react-router-dom";



function App() {
  const [pokemon, setPokemon] = useState([]);
  const [lastPokemon, setLastPokemon] = useState({});
  const [value, setValue] = useState(""); // Para guardar el pokemon que se busca en el input
  const [debouncedValue] = useDebounce(value, 1500) // valor de texto con retardo

  const [repeated, setRepeated] = useState(false) //comprobar si se escribe uno repe
  const [notFound, setNotFound] = useState(false) //si existe

 const pokemonToSearch = (input) => {
  setValue(input)
 }

 const createPokemon = (input) => {
  setPokemon([...pokemon, input])
}

  //petición http 
  useEffect(() => {

    async function getPokemon() {
      try {
        //method every --> aplica una FUNCIÓN por cada elemento del array y devuelve true o false
        //A cada pokemon del array vas a verificar que no tiene el mismo valor que lo que le entra por debouncedValue. Es decir, que no tenga el mismo nombre. Si se repite, no entra.
        if(pokemon.length === 0 && pokemon.every((pokeInfo) => pokeInfo.name !== debouncedValue)){
        }

        if (pokemon.length === 0 || pokemon.every(e => e.name !== debouncedValue)) {
          setNotFound(false)
          const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${debouncedValue}`);
          const result = response.data;
        
         
          const pokemonName = result.name.charAt(0).toUpperCase() + result.name.slice(1);
          const type1 = result.types[0].type.name || "";
          const type2 = result.types[1] ? result.types[1].type.name : "";

          const pokemonInfo = {
            'name': pokemonName,
            'id': result.id,
            'type': result.types[0].type.name.charAt(0).toUpperCase() + result.types[0].type.name.slice(1),
            'image': result.sprites.other.dream_world.front_default,
            'type_1': result.type1,
            'type_2': result.type2,
            
          }
       
          
          setPokemon([pokemonInfo,...pokemon]);
          setLastPokemon(pokemonInfo) 
          setRepeated(false)
        
        } 
        
        else if (pokemon.every(e => e.name === debouncedValue)){
          setRepeated(true);
          setNotFound(false)
          
        }

      } catch (e) {
      setNotFound(true) 
     /*  setRepeated(false)  */
      }
    } 
    getPokemon()
    // eslint-disable-next-line
  }, [debouncedValue]);

  const data = {
    pokemon,
    pokemonToSearch,
    debouncedValue,
    setValue,
    lastPokemon,
    repeated,
    notFound,
    createPokemon

  }
 

  return (
    <div className='App'>
      <BrowserRouter>
        <Header/>
      <pokemonContext.Provider value={data}>
        <Main/>
      </pokemonContext.Provider>
      </BrowserRouter>
      <Footer/>
      
    </div>
  );
}

export default App;
