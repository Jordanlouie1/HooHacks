import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Title } from './App.js';
import { Mission } from './App.js'
import { Clicker } from './App.js';
import reportWebVitals from './reportWebVitals';
import { App } from './App.js';
import { Header } from './Header.js';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <Title/>
   <App/>
   <div className='box'>
    <Mission/>
   </div>
   <Header></Header>
  </React.StrictMode>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
