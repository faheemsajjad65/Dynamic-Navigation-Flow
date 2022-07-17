import React, {useState} from 'react'
import { useDispatch } from 'react-redux'

import { 
  Box,
  Grid,
  Select,
  MenuItem,
  Button,
  Container
} from '@mui/material';

import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';



import { submitChoices } from '../actions/choices'
import Loader from '../components/Loader';
import ScreenC1 from '../views/ScreenC1'

export default function ScreenB1() {
  
  const dispatch = useDispatch();
  const [showLoader , setShowLoader]  = useState(false)
  const [nextScreen, setNextScreen] = useState("");

  const [selectedVal , setSelectedVal] = useState("Choice A");

  const handleChange = (e) => {
    setSelectedVal(e.target.value)
  }

  const submitHandler = () => {
    setShowLoader(true)
    dispatch(submitChoices()).then(response => {
      setShowLoader(false)
      setNextScreen("ScreenC1");
    })
  }
  

  if(nextScreen)
    return <ScreenC1 choice={selectedVal} />

  return (
    <Box 
      display="flex"
      justifyContent="center"
      alignItems="center"
      sx={{
          width: 412,
          height: 700,
          backgroundColor: '#ffffcd'
      }}
    >
      <Container maxWidth="sm" style={{textAlign:'center'}}>
        {
          !showLoader ? (
            <Grid container spacing={3} >
              <Grid item sm={12}>

                <Select
                    name='case_status'
                    id='case_status'
                    value={selectedVal}
                    onChange={handleChange}
                    fullWidth
                  >
                    <MenuItem value="Choice A">Choice A</MenuItem>
                    <MenuItem value="Choice B">Choice B</MenuItem>
                    <MenuItem value="Choice C">Choice C</MenuItem>
                    <MenuItem value="Choice D">Choice D</MenuItem>
                    <MenuItem value="Choice E">Choice E</MenuItem>
                  </Select>
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
