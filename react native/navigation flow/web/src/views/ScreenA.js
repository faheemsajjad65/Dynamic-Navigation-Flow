import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Loader from '../components/Loader';

import { getExperiments } from '../actions/experiments.js'
import ScreenB1 from './ScreenB1';
import ScreenB2 from './ScreenB2';
import ScreenB3 from './ScreenB3';
import ScreenC2 from './ScreenC2';

export default function ScreenA() {
    
    const dispatch = useDispatch();
    const [showLoader , setShowLoader]  = useState(false)
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
      <div>
        {
            !showLoader ? (
                <>
                    <h1>Screen A</h1>  
                    <input type="button" onClick={experimentsHandler} value="Submit"/>
                </>
            ) : <Loader />
        }
      </div>
  )
}
