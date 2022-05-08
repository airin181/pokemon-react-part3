import { React, useContext } from 'react'
import { useState } from 'react';
import { pokemonContext } from './../../../context/pokemonContext';

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

function Form() {

  const { register, handleSubmit } = useForm();
  const { createPokemon } = useContext(pokemonContext);
  const [send, setSend] = useState(false); // mensaje de pokemon guardado
  const [type, setType] = useState(''); //tipo de pokemon


  const onSubmit = (data) => {
    createPokemon(data);
    setSend(true)
  }

   const handleChange = (event) => {
    setType(event.target.value)
  }; 

  return (
    <div>

      <h1 className='h1-form'>Crea tu propio pokemon!</h1>

      <form className='form-div' onSubmit={handleSubmit(onSubmit)}>
        <TextField
          style={{ width: "385px", margin: "5px" }}
          type="text"
          label="Nombre del pokemon"
          variant="outlined"
          name="name"
          {...register("name")}
          minLength='3'
          required
        />
        <TextField
          style={{ width: "385px", margin: "5px" }}
          type="number"
          label="Número de ID"
          variant="outlined"
          name="number"
          {...register("id")}
          required
        />
        <TextField
          style={{ width: "385px", margin: "5px" }}
          type="text"
          label="URL de la imagen del pokémon"
          variant="outlined"
          name="url"
          {...register("image")}
          minLength='3'
        />

        <TextField
          style={{ width: "385px", margin: "5px" }}
          type="text"
          label="Peso"
          variant="outlined"
          name="weight"
          {...register("weight")}

        />
        <Box sx={{ minWidth: 120, width: "385px", margin: "5px" }}  >
          <FormControl fullWidth  >
            <InputLabel id="demo-simple-select-label">Tipo</InputLabel>

            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={type}
              label="Tipo"
              {...register("type")}
              onChange={handleChange} 
              required
              
          
            >
              <MenuItem value={"bug"}>Bicho</MenuItem>
              <MenuItem value={"dark"}>Oscuro</MenuItem>
              <MenuItem value={"fairy"}>Hada</MenuItem>
              <MenuItem value={"dragon"}>Dragón</MenuItem>
              <MenuItem value={"electric"}>Eléctrico</MenuItem>
              <MenuItem value={"fight"}>Lucha</MenuItem>
              <MenuItem value={"fire"}>Fuego</MenuItem>
              <MenuItem value={"flight"}>Volador</MenuItem>
              <MenuItem value={"ghost"}>Fantasma</MenuItem>
              <MenuItem value={"grass"}>Planta</MenuItem>
              <MenuItem value={"ground"}>Tierra</MenuItem>
              <MenuItem value={"ice"}>Hielo</MenuItem>
              <MenuItem value={"normal"}>Normal</MenuItem>
              <MenuItem value={"psychic"}>Psíquico</MenuItem>
              <MenuItem value={"rock"}>Roca</MenuItem>
              <MenuItem value={"steel"}>Acero</MenuItem>
              <MenuItem value={"water"}>Agua</MenuItem>
              <MenuItem value={"siniestry"}>Siniestro</MenuItem>
              <MenuItem value={"poison"}>Veneno</MenuItem>
            </Select>

          </FormControl>
        </Box> 
        <div className='save-msg'>
          <Button type="submit" variant="contained">CREAR</Button>
          <Button type="submit" variant="outlined" component={Link} to="/pokedex">IR A MI POKÉDEX</Button>
          {send ? <Stack><Alert severity="success">¡Pokemon creado!</Alert>
          </Stack>: ""}
        </div>

        {/* 
    
        <label>Tipo:
        <select required {...register("type")}>
          <option value="bug">Bicho</option>
          <option value="dark">Oscuro</option>
          <option value="dragon">Dragón</option>
          <option value="electric">Eléctrico</option>
          <option value="fairy">Hada</option>
          <option value="fighting">Lucha</option>
          <option value="fire">Fuego</option>
          <option value="flying">Volador</option>
          <option value="ghost">Fantasma</option>
          <option value="grass">Planta</option>
          <option value="ground">Tierra</option>
          <option value="ice">Hielo</option>
          <option value="normal">Normal</option>
          <option value="poison">Veneno</option>
          <option value="psychic">Psíquico</option>
          <option value="rock">Roca</option>
          <option value="steel">Acero</option>
          <option value="water">Agua</option>
          <option value="water">Siniestro</option>
        </select>
        </label>
   */}


      </form>
    </div>
  )
}

export default Form