import React from 'react';
import PokeList from './PokeList/PokeList';
import Detail from './Detail/Detail';
import Form from './Form/Form';
import Search from './Search/Search';
import Home from './Home/Home';
import {Route, Routes} from 'react-router-dom';


const Main = () => {



  return (
    <section className='main'>
      <Routes>   
        <Route element={<Home/>} path='/'/>                        
        <Route element={<PokeList/>} path='/pokedex'/>
        <Route element={<Form/>} path='/form'/>
        <Route element={<Search/>} path='/search'/>
 
        <Route element={<Detail/>} path='/pokedex/pokemon/:id'/>
        <Route element={<Detail/>} path='/search/pokemon/:id'/> 

     
        
      
      </Routes> 
    </section>
  )
};

export default Main


//<Route element={<PokeList value={pokemon} key = {uuidv4()} remove={(i) => removePokemon(i)}/>} path='/'/>



    