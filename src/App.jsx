import 'bootstrap-icons/font/bootstrap-icons.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import Home from './components/Home'
import Error404 from './components/Error'
import Shop from './components/Shop';
import { useEffect, useState } from 'react';
import produtosJson from "./mocks/produtos.json"





function App() {

  

  
  return (
     <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/carrinho' element={<Shop/>}/>
        <Route path='*' element={<Error404/>}/>
      </Routes>
     </BrowserRouter>
  )
}

export default App
