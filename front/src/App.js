import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Inicio from './Pages/Inicio.js';
import Home from './Pages/Home.js';
import ConfirmarCuenta from './Pages/ConfirmarCuenta.js';


function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path = '/' element = {<Home />} />
            <Route exact path = '/I' element = {<Inicio />} />
            <Route exact path = '/confirmar/:token' element = {<ConfirmarCuenta />} /> 
        </Routes>
    </BrowserRouter>
  );
}

export default App;