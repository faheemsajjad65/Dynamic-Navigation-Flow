import React, {useState} from 'react'

import { 
  Box,
  Grid,
  Typography,
  Button,
  Container
} from '@mui/material';

import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import ScreenC2 from '../views/ScreenC2'

export default function ScreenB3() {
  
  const [nextScreen, setNextScreen] = useState("");

  const submitHandler = () => {
    setNextScreen("ScreenC2")
  }

  if(nextScreen)
    return <ScreenC2 />

  return (
    <Box 
      display="flex"
      justifyContent="center"
      alignItems="center"
      sx={{
          width: 412,
          height: 700,
          backgroundColor: '#cccc01'
      }}
    >
      <Container maxWidth="sm" style={{textAlign:'center'}}>
        <Grid container spacing={3}>
          <Grid item sm={12}>
            <Typography variant="body1" style={{color:'black'}}>
              Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum 
            </Typography>
          </Grid>
          <Grid item sm={12}>
            <Button variant="contained" onClick={submitHandler}   startIcon={<ArrowForwardIosIcon />}> Next </Button>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}
