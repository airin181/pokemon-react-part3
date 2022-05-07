import React from "react";
import Card from './Card/Card'
import { v4 as uuidv4 } from 'uuid';





const PokeList = ({value, remove}) => {
  
  return (<div className="pokelist-div">
    <p>Pokelist</p>

{/* {(value.length !== 0
        ? 
        value.map((poke, i)=><Card value={poke} key = {uuidv4()} remove={() => remove(i)} />)
        : "")
      } */}

  </div>);
};

export default PokeList;