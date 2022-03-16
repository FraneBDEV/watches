import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './routes';
import StartPage from './components/StartPage';
import News from './components/News';



ReactDOM.render(
   <StartPage />
   <News />
    , 
    document.getElementById('root')
)
