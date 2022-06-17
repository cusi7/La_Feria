import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inicio from './Pages/Inicio.js';
import Home from './Pages/Home.js';


function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path = '/' element = {<Home />} />
            <Route exact path = '/I' element = {<Inicio />} /> 
        </Routes>
    </BrowserRouter>
  );
}

export default App;