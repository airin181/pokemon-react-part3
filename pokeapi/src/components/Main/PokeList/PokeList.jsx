import React from "react";
import Card from './Card/Card'


const PokeList = ({value, remove}) => {
  console.log('value --> ',{value});
  console.log('remove --> ',{remove});

  

  return (<div className="pokelist-div">

{(value.length !== 0
        ? 
        value.map((poke, i)=><Card value={poke} key = {i} remove={() => remove(i)} />)
        : "")
      }

  </div>);
};

export default PokeList;