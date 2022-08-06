import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import configureStore from "./Redux/Store";
// import store from './Redux/Store';
import { createBrowserHistory } from 'history';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import axios from 'axios';
import { handleError } from './Utils/helper';
export const history = createBrowserHistory();

 // For GET requests
axios.interceptors.request.use(
    (req) => {
       return req;
    },
    (error) => {
       handleError(error);
       return Promise.reject(error);
    }
 );
 
 // For POST requests
 axios.interceptors.response.use(
    (res) => {
       if (res.status === 201) {
          console.log('Posted Successfully');
       }
       return res;
    },
    (error) => {
        handleError(error);
        return Promise.reject(error);
    }
 );

const root = ReactDOM.createRoot(document.getElementById('root'));
const store = configureStore();

root.render(
<Provider store={store}>
    <ToastContainer />
    <App history={history}/>
</Provider>
);

reportWebVitals();
