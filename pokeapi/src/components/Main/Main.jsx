import React from 'react';
import PokeList from './PokeList/PokeList';
import Detail from './Detail/Detail';
import Form from './Form/Form';
import Search from './Search/Search';
import Home from './Home/Home';


import {Route, Routes} from 'react-router-dom';


const Main = () => {

/* 
  //_________función de eliminar pokemon que enviamos por props a pokelist
  const removePokemon = (i) => {
  const remainingPokemon = pokemon.filter((poke, j)=> i!== j);
  setPokemon(remainingPokemon);
}   */ 

  return (
    <section className='main'>
      <Routes>   
        <Route element={<Home/>} path='/'/>                        
        <Route element={<PokeList/>} path='/pokedex'/>
        <Route element={<Form/>} path='/form'/>
        <Route element={<Search/>} path='/search'/>
        <Route element={<Detail/>} path='/pokemon/:id'/>
      </Routes> 
    </section>
  )
};

export default Main


//<Route element={<PokeList value={pokemon} key = {uuidv4()} remove={(i) => removePokemon(i)}/>} path='/'/>



    