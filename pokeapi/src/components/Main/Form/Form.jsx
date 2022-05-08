import React from 'react'
import { useState } from 'react';

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { Link } from "react-router-dom";
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

function Form() {

/*   const [send, setSend] = useState(""); // estado que tendrá un array con pokemon buscados
  const onClick = () => setSend(true) */


  return (
    <div>
      <h1 className='h1-form'>Crea tu propio pokemon!</h1>
      <div className="App">
      <form /* onSubmit={saveNews} */ className="form">
        <TextField
          style={{ width: "400px", margin: "5px" }}
          type="text"
          label="Nombre del pokemon"
          variant="outlined"
          name="name"
        />
        <TextField
          style={{ width: "400px", margin: "5px" }}
          type="number"
          label="Número de ID"
          variant="outlined"
          name="id"
        />
        <TextField
          style={{ width: "400px", margin: "5px" }}
          type="text"
          label="URL de la imagen del pokemon"
          variant="outlined"
          name="url"
        />
   
        <TextField
          style={{ width: "400px", margin: "5px" }}
          type="text"
          label="Weight"
          variant="outlined"
          name="weight"
        />
        <TextField
          style={{ width: "400px", margin: "5px" }}
          type="text"
          label="Tipo de pokemon"
          name="type"
          variant="outlined"
        />
        <br />
        <div className="div-btn-form">

        <Button variant="contained" color="primary" type="submit"/*  onClick={onClick} */>
          Save
        </Button>
       
        
        <Button component={Link} to="/news" variant="contained" color="inherit" type="submit" >
        Take me to News
        </Button>
        </div>
     {/*    {send?<Stack><Alert severity="success">Publication saved!</Alert>
        </Stack>:""} */}

        
      </form>
      </div>
    </div>
  )
}

export default Form