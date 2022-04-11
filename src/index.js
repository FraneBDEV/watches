import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import MainPage from './MainPage';
import NotFound from './components/NotFound'
const Gallery = React.lazy(() => import("./components/Gallery"))

ReactDOM.render(
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/gallery" element={
      <Suspense fallback={<div>Loading...</div>}>
        <Gallery />
      </Suspense>} />
      {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </BrowserRouter>,
    document.getElementById('root')
)
