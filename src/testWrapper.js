import React from 'react';
import { Provider } from 'react-redux';
import configureStore from "./Redux/Store";
const store = configureStore();

export const ComponentWrapper = ({children}) => {
return (
    <Provider store={store}>
        {children}
    </Provider>
);
}