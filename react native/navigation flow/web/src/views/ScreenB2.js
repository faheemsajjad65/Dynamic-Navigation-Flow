import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import { 
  Box,
  Grid,
  FormControl,
  RadioGroup,
  FormControlLabel,
  Radio,
  Button,
  Container
} from '@mui/material';

import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import { submitChoices } from '../actions/choices'
import Loader from '../components/Loader';
import ScreenC2 from '../views/ScreenC2'

export default function ScreenB2() {
  const dispatch = useDispatch();
  const [showLoader , setShowLoader]  = useState(false)
  const [nextScreen, setNextScreen] = useState("");

  const [selectedChoice , setSelectedChoice] = useState("Choice A")

  const handleChange = (e) => {
    setSelectedChoice(e.target.value)
  }
  
  const submitHandler = () => {
    setShowLoader(true)
    dispatch(submitChoices()).then(response => {
      setShowLoader(false)
      setNextScreen("ScreenC2");
    })
  }

  if(nextScreen)
    return <ScreenC2 choice={selectedChoice} />

  return (
    <Box 
      display="flex"
      justifyContent="center"
      alignItems="center"
      sx={{
          width: 412,
          height: 700,
          backgroundColor: '#ffff66'
      }}
    >
      <Container maxWidth="sm" style={{textAlign:'center'}}>
        {
          !showLoader ? (
            <Grid container spacing={3}>
              <Grid item sm={12}>
                <FormControl>
                  <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="Choice A"
                    name="radio-buttons-group"
                    onChange={handleChange}
                  >
                    <FormControlLabel value="Choice A" control={<Radio />} label="Choice A" />
                    <FormControlLabel value="Choice B" control={<Radio />} label="Choice B" />
                    <FormControlLabel value="Choice C" control={<Radio />} label="Choice C" />
                    <FormControlLabel value="Choice D" control={<Radio />} label="Choice D" />
                    <FormControlLabel value="Choice E" control={<Radio />} label="Choice E" />
                  </RadioGroup>
                </FormControl>
              </Grid>

              <Grid item sm={12}>
                <Button variant="contained" onClick={submitHandler}   startIcon={<ArrowForwardIosIcon />}> Next </Button>
              </Grid>
            </Grid>
          ) : <Loader color="black" />
        }
      </Container>
    </Box>
  )
}
