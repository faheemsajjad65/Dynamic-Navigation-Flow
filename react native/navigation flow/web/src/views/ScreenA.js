import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { 
    Box,
    Typography,
    Button,
    Container
  } from '@mui/material';
  
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
  

import Loader from '../components/Loader';

import { getExperiments } from '../actions/experiments.js'
import ScreenB1 from './ScreenB1';
import ScreenB2 from './ScreenB2';
import ScreenB3 from './ScreenB3';
import ScreenC2 from './ScreenC2';

export default function ScreenA() {
    
    const dispatch = useDispatch();

    // custom hook for loader
    const [showLoader , setShowLoader]  = useState(false)

    // custom hook for next screen
    const [nextScreen, setNextScreen] = useState("");

    const experimentsHandler = () => {
        setShowLoader(true);
        dispatch(getExperiments()).then(response => {
            setShowLoader(false);
            setNextScreen(response)
        })
    }

    if(nextScreen){
        switch(nextScreen){
            case 'screenB1':
                return <ScreenB1 />
            case 'screenB2':
                return <ScreenB2 />
            case 'screenB3':
                return <ScreenB3 />
            case 'noScreenB':
                return <ScreenC2 />
            default:
                return <>Default Error</>
        }
    }

    return (
        <Box 
            display="flex"
            justifyContent="center"
            alignItems="center"
            sx={{
                width: 412,
                height: 700,
                backgroundColor: '#97d077'
            }}
        >
            <Container maxWidth="sm" style={{textAlign:'center'}}>
            {
                !showLoader ? (
                    <>
                        <Typography variant="h4" style={{color:'white'}} mb={5}>
                            Screen A
                        </Typography>
                        
                        <Button variant="contained" onClick={experimentsHandler}   startIcon={<ArrowForwardIosIcon />}> Next </Button>
                    </>
                ) : <Loader color="white" />
            }
            </Container>
        </Box>
  )
}
