import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Doodles from '../assets/images/doodle1.svg'
import { Button,Link } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Stepper from '../components/stepper/stepper';
import { useState } from 'react';
import seance from '../components/stepper/seance';
import { useEffect } from 'react';
import Table from '../components/table/Table'
import axios from "axios"

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


export default function Cree_seance() {
  const [cree,setcree] = useState('start');
  const[etudata,setetudata]=useState([]);
  const change =()=>{
    console.log("changed!");
    setcree('tab');
  }

  // useEffect(()=>{
    
  // })

  useEffect(() => {
    if(seance.nom_classe.length>0) 
      {setcree('tab')}
  },[]);

  useEffect(()=>{
    axios.get("/test").then(
      response=>setetudata(response.data)
      )
      console.log(etudata);
  },[])

  const display_cree=()=>{
    // setInterval(() => {
    //   fetch("/test").then(
    //     Response=>Response.json()
    //     ).then(
    //       data=>{setetudata(data)}
    //       );
    //   console.log(etudata);
    // }, 8000);

    return<Box display="flex"
    justifyContent="center"
    alignItems="center"
    Height="100vh"
    width="inherit"
    sx={{ flexDirection: 'column', margin:'20px'}}
    >
    <Link href="/generate-qr-code" target="_blank" underline="none">
      <Button variant="outlined" size='large' sx={{ justifySelf:'flex-start',margin:'10px'}} >QR code</Button>
    </Link>
    <Button variant="outlined" size='large' sx={{ justifySelf:'flex-start',margin:'10px'}} >Terminer la seance</Button>

      <Table></Table>
    </Box>
  }

  const starting=()=>{
    return <Box display="flex"
    justifyContent="center"
    alignItems="center"
    Height="80vh"
    sx={{ flexDirection: 'column', margin:'20px'}}
    >
      <img src={Doodles} alt="" style={{width:'30vw',hight:'30vh'}} />
    <Button color="primary" variant="contained" size="medium" sx={{marginTop:'10px'}}
    onClick={()=>{
      setcree('now')
    }}
    >Cree une seance
    </Button>
    </Box>
  }
  return (
    <React.Fragment>
      <CssBaseline />
      <ThemeProvider theme={theme}>
      <Container maxWidth="md">
        {/* <Box sx={{ height: '70vh', width: '50vw' }} /> */}
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          Height="80vh"
          width='inherit'
          sx={{ flexDirection: 'column', margin:'20px'}}
        >
          
          {
            cree==='start'  && starting()
            
            
          }
          {
            cree==='tab'&&display_cree()
          }
          {
            cree==='now'&& <Stepper change={change}/>
          }
          
        </Box>
      </Container>
      </ThemeProvider>
    </React.Fragment>
  );
}
