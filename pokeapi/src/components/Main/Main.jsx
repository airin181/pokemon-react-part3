import React, { useEffect, useState } from 'react';
import PokeList from './PokeList/PokeList';
import Detail from './Detail/Detail';
import Form from './Form/Form';
import Search from './Search/Search';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

import {Route, Routes} from 'react-router-dom';
import { useDebounce } from "use-debounce";
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';

import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import banner from './../../assets/banner.webp'




const Main = () => {

  //Llamamos a la función useState con valor inicial del estado falsy por defecto y nos devuelve dos constantes en un array. El primero es el estado actual y el segundo es el método para actualizar ese estado. 
  const [value, setValue] = useState(""); // Para guardar el pokemon que se busca en el input
  const [pokemon, setPokemon] = useState([]); // estado que tendrá un array con pokemon buscados
  const [debouncedValue] = useDebounce(value, 2500) // valor de texto con retardo

  const [repeated, setRepeated] = useState(false) //comprobar si se escribe uno repe
  const [notFound, setNotFound] = useState(false)

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

/* 
  //_________función de eliminar pokemon que enviamos por props a pokelist
  const removePokemon = (i) => {
  const remainingPokemon = pokemon.filter((poke, j)=> i!== j);
  setPokemon(remainingPokemon);
}   */ 





  return (
    <section className='main'>

<img src={banner} alt="banner" className="banner"/>
  
    {repeated ? <Stack><Alert severity="warning">¡No puede haber pokemon repetidos! Inténtalo de nuevo 😃</Alert></Stack> : "" }
      {notFound ? <Stack><Alert severity="error">¡No se ha encontrado el pokemon que indicas! ¿Estás seguro de que lo has escrito bien? 😃</Alert></Stack> : "" }
     <Routes>
      <Route element={<PokeList value={pokemon} key = {uuidv4()} remove={(i) => removePokemon(i)}/>} path='/'/>
      <Route element={<Form/>} path='/form'/>
      <Route element={<Search/>} path='/search'/>
      <Route element={<Detail/>} path='/pokemon/:id'/>
    </Routes> 

    </section>
  )
};

export default Main



    