import React from 'react';
import { Provider } from 'react-redux';

import { setupStore } from '../store';
// const store = setupStore();

export default function StoreProvider({children}) {

    return (
        <Provider store={setupStore}>
            {children}
        </Provider>
    )
}