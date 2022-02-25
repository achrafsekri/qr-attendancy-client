import React from 'react'
import { Box } from '@mui/material';
import './select.css'
import Button from '@mui/material/Button';
import { useState } from 'react';
import { useEffect } from 'react';

export default function Select_seance(props) {
  const[change,setchange]=useState(false);
  

    const handelsubmit=()=>{
      if(change===true)
        {
          props.handelsub();
        }
        else{
          window.alert('please select');
        }
        }
    const handelchange=(e)=>{
        console.log(e.target.value);
        setchange(true)
    }
  return (
    <Box
    sx={{
      height:'30vh',
      width:'inherit',
      display:'flex',
      justifyContent:'center',
      alignItems:'center'
    }}>
        <form action ='submit'>
            <label>selectioner la date:
                <input type="date" classeName='date' name="bday" required pattern="\d{4}-\d{2}-\d{2}" onChange={handelchange}></input>
                <span className='validity'></span>
                
            </label>
            
            <Button variant="contained" onClick={handelsubmit}>Afficher les seances</Button>
  
</form>
    </Box>
  )
}
