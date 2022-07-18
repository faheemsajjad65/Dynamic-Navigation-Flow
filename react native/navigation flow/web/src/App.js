import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { StylesProvider } from '@material-ui/core/styles';

import StoreProvider from './store/StoreProvider';
import { gettingLogedIn } from './actions/auth'
import ScreenA from './views/ScreenA';


function DynamicNavigationFlow (){

    const dispatch = useDispatch();
    const { sessionId } = useSelector((state)=> state.auth)

    // Everytime user lands on it , need to loged in the user
    useEffect( () => {
        // update store with session id in it
        dispatch(gettingLogedIn())
    },[])

    // if user is loged in successfully then load screen A
    if(sessionId)
        return <ScreenA />

    return (
        <div>Please wait...</div>
    )
  }
  
function App() {
    return (
        // using Redux store in order to save sessionID
        <StoreProvider>
            {/* for material UI */}
            <StylesProvider injectFirst>
                {/* Main application templates and content */}
                <DynamicNavigationFlow />
            </StylesProvider>
        </StoreProvider>
    );
}


export default App;