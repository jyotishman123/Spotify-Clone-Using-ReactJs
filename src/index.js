import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import ContexProvider from './ContexProvider';
import reducer,{initialState} from './Reducer';
 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter> 
    <ContexProvider initialState={initialState} reducer={reducer}> 
    <App />
    </ContexProvider>
    </BrowserRouter>
   
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
 
