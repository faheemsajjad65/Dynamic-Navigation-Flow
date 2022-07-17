import React,{useState, useEffect} from 'react'

import { 
  Box,
  Grid,
  Typography,
  Container
} from '@mui/material';

import ScreenD from '../views/ScreenD' 
import Loader from '../components/Loader';

export default function ScreenC2({choice}) {
  
  const [nextScreen, setNextScreen] = useState("");
  const [showLoader , setShowLoader]  = useState(false)

  useEffect(() => {
    setShowLoader(true);
    setTimeout(()=>{
      setNextScreen("ScreenD")
      setShowLoader(false);
    },3000)
  })

  if(nextScreen)
    return <ScreenD />
  
  
  return (
    <Box 
      display="flex"
      justifyContent="center"
      alignItems="center"
      sx={{
          width: 412,
          height: 700,
          backgroundColor: '#ff33ff'
      }}
    >
      <Container maxWidth="sm" style={{textAlign:'center'}}>
        <Grid container spacing={3}>
          {
            choice && (
              <Grid item sm={12}>
                <Typography variant="subtitle2" style={{color:'black',backgroundColor:"white",padding:"2px"}}>
                  {choice}
                </Typography>
              </Grid>
            )
          }
          
          <Grid item sm={12}>
            <Typography variant="body1" style={{color:'black'}}>
              Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum 
            </Typography>
          </Grid>
          
          {
            showLoader ? (
              <Grid item sm={12}>
                <Loader color="black"/>
              </Grid>
            ) : ""
          }

        </Grid>
      </Container>
    </Box>
  )
}
