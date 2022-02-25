import React from 'react'
import Pre from '../components/table/precedente'
import { useState } from 'react'
import { Box,Container,CssBaseline } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Select_seance from '../components/selector/select_seance';
import { useEffect } from 'react';

const theme = createTheme({
  palette: {
    primary: {
      main:'#673ab7',
    },
    secondary: {
      main: '#673ab7',
    },
  },
});

export default function Seance_precedente() {
  const [step,setstep]=useState(1);

  const handelsub=()=>{
    console.log('ff')
  }

  const starting=()=>{
    return <Select_seance func={handelsub}></Select_seance>
  }
  
  const display_tab_seance=()=>{
    return <h1>step2</h1>
  }

  const display_seance=()=>{
    return <h1>step3</h1>
  }

  return (<React.Fragment>
    <CssBaseline />
    <ThemeProvider theme={theme}>
    <Container maxWidth="md">
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        Height="80vh"
        width='inherit'
        sx={{ flexDirection: 'column', margin:'20px'}}
      >
        
        {
          step===1  && starting()
          
          
        }
        {
          step===2 && display_tab_seance()
        }
        {
          step===3 && display_seance()
        }
        
      </Box>
    </Container>
    </ThemeProvider>
  </React.Fragment>
  )
}
