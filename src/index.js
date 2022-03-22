import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './routes';
import StartPage from './components/StartPage';
import News from './components/News';
import ContactForm from "./components/ContactForm";
import Service from "./components/Service";



ReactDOM.render(
    <>
    <StartPage />
    <News />
    <ContactForm />
    <Service />
    </>
    , 
    document.getElementById('root')
)
