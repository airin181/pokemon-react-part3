import React, { useEffect, useState } from 'react';
import Home from './components/Main/Home/Home';
import Main from './components/Main/Main'
import Header from './components/Header'
import Footer from './components/Footer/Footer'
import './styles/styles.scss'

import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';

import {BrowserRouter} from 'react-router-dom';
import {pokemonContext} from './context/pokemonContext';
import { useDebounce } from "use-debounce";


function App() {
  /* const [pokemon, setPokemon] = useState([]);
  //Llamamos a la función useState con valor inicial del estado falsy por defecto y nos devuelve dos constantes en un array. El primero es el estado actual y el segundo es el método para actualizar ese estado. 
  const [value, setValue] = useState(""); // Para guardar el pokemon que se busca en el input
  const [debouncedValue] = useDebounce(value, 2500) // valor de texto con retardo

 

  //petición http 
  useEffect(() => {

    async function getPokemon() {
      try {
        //method every --> aplica una FUNCIÓN por cada elemento del array y devuelve true o false
        //A cada pokemon del array vas a verificar que no tiene el mismo valor que lo que le entra por debouncedValue. Es decir, que no tenga el mismo nombre. Si se repite, no entra.

        if (debouncedValue && pokemon.every(e => e.name !== debouncedValue)) {

          setNotFound(false) 
        
          const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${debouncedValue}`);
          const result = response.data;
          
          setPokemon([result,...pokemon]);
          setRepeated(false)
        
        } 
        
        else if (debouncedValue && pokemon.some(e => e.name === debouncedValue)){
          setRepeated(true);
          setNotFound(false) 
          
        }

      } catch (e) {
        setNotFound(true) 
        setRepeated(false)
      }
    } 
    getPokemon()
  }, [debouncedValue]);

  const data = {
    pokemon
  }
 */

  return (
    <div className='App'>
      <BrowserRouter>
        <Header/>
      <pokemonContext.Provider /* value={data} */>
        <Main/>
      </pokemonContext.Provider>
      </BrowserRouter>
      <Footer/>
      
    </div>
  );
}

export default App;
