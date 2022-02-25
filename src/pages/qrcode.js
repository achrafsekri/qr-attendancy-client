import React from 'react'
import QRCode from 'qrcode';
import {useState,useEffect} from 'react';
import Button from '@mui/material/Button';
import { Box } from '@mui/material';
import './qrcode.css'

export default function Qrcode() {
  const [code,setcode]=useState('');
  const [hidden,sethidden]=useState('hidden');
  //le string du qr code 
  const [qrcode,setqrcode]=useState('');

  const generate_qr=()=>{
      let text=(Math.random() + 1).toString(36).substring(7);
      sethidden('display');
      QRCode.toDataURL(text).then((data)=>{
        setcode(data);
        setqrcode(text);
        console.log(qrcode);
      });

      const interval = setInterval(() => {
        let text=(Math.random() + 1).toString(36).substring(7);
        console.log(text);
        QRCode.toDataURL(text).then((data)=>{
        setcode(data);
        setqrcode(text);
    });
      }, 8000);
      return () => clearInterval(interval);
    
  };
  

  
  return (
    <Box sx={{display: 'flex',
      width: 'inerit',
      height: 'inherit',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column'}}>
      <div className="image_container">
      <img src={code} className={hidden}  alt="qr code" />
      </div>
      <Button variant="outlined" onClick={generate_qr}>generate a QR code</Button>
    </Box>
  );
}
