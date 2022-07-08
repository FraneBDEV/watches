import { HashRouter, Routes, Route } from "react-router-dom";
import React from 'react';
import ReactDOM from 'react-dom';
import Main from './Routes/main'
import Gallery from "./Routes/Gallery";

ReactDOM.render(
  <React.StrictMode>
  <HashRouter basename={process.env.PUBLIC_URL}>
  <Routes>
  <Route exact path="/" element={<Main />} />
  <Route path="/gallery" element={<Gallery />} />
  </Routes>
  </HashRouter>
  </React.StrictMode>,
    document.getElementById('root')
)
