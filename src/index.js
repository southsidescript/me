import React from 'react';
import ReactDOM from 'react-dom';
import "./modules/index.css";   
import App from './pages/App/App';
import './utils/cursor';
import { BrowserRouter } from 'react-router-dom';

let root = ReactDOM.createRoot(document.querySelector('#root'));


root.render(
    <BrowserRouter><App/></BrowserRouter>

)



