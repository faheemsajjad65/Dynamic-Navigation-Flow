import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import StoreProvider from './store/StoreProvider';
import { gettingLogedIn } from './actions/auth'
import ScreenA from './views/ScreenA';


function DynamicNavigationFlow (){

    const dispatch = useDispatch();
    const { sessionId } = useSelector((state)=> state.auth)

    useEffect( () => {
        dispatch(gettingLogedIn())
    },[])

    if(sessionId)
        return <ScreenA />

    return (
        <div>Logedin...</div>
    )
  }
  
function App() {
    return (
        <StoreProvider>
            <DynamicNavigationFlow />
        </StoreProvider>
    );
}


export default App;