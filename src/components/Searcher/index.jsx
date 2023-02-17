import React, { useState } from 'react'
import { IconButton, Stack,TextField } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';

//Styles
const stackStyles = {
    marginTop: '30px',
    width: '80%',

  };

 
const Searcher = ({ setUserInput }) => {

    const [valueInput, setValueInput] = useState('')

    //onchange del input
    const onSearchValueChange = (e)=>{
        let value = e.target.value
        setValueInput(value)
    }

    //onClick del boton.
    const handleSubmit = () =>{
        setUserInput(valueInput)
    }
  return (
    <Stack 
    direction= 'row'
    sx={stackStyles}>

        <TextField 
        label="Github User"
        id="outlined-basic"
        placeholder="Octocat" 
        //InputProps es para que el icono quede adentro del buscador.
        InputProps={{
            endAdornment: (
              <IconButton onClick={handleSubmit}>
                <SearchIcon />
              </IconButton>
        )}}
        value={valueInput}
        onChange={onSearchValueChange}
        />

        </Stack>
  )
}

export default Searcher