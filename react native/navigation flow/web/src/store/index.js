import { configureStore } from '@reduxjs/toolkit'
import logger from 'redux-logger'
import { combineReducers} from "redux";
// import CasesReducer from '../reducers/cases';

import AuthReducer from '../reducers/auth';

const appReducer = combineReducers({
    auth: AuthReducer
})

const rootReducer = (state, action) => {

    const updatedState = Object.assign({}, state);
    
    if (action.type === 'AUTH_LOGOUT_SUCCESS') {
        Object.keys(updatedState).forEach(sk => {
            updatedState[sk] = undefined;
        })
    }

    return appReducer(updatedState, action)
}

export const setupStore = configureStore({
    reducer:rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
    devTools: process.env.NODE_ENV !== 'production'
})