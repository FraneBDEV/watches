import { HashRouter, Routes, Route } from "react-router-dom";
import React from 'react';
import ReactDOM from 'react-dom';
import LandPage from './Routes/LandPage'
import Gallery from "./Routes/Gallery";
import Article from "./Routes/Article";

ReactDOM.render(
  <React.StrictMode>
  <HashRouter basename={process.env.PUBLIC_URL}>
    <Routes>
    <Route exact path="/" element={<LandPage />} />
    <Route path="/gallery" element={<Gallery />} />
    <Route path="/article" element={<Article/>} />
    </Routes>
  </HashRouter>
  </React.StrictMode>,
    document.getElementById('root')
)
