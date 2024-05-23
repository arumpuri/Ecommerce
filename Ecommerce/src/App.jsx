import { useState } from 'react'
import './App.css'

import Navbar from './components/navbar/Navbar.jsx'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Shop from './components/Pages/Shop.jsx'
import ShopCategory from './components/Pages/ShopCategory.jsx'
import Product from './components/Pages/Product.jsx'
import Cart from './components/Pages/Cart.jsx'
import LoginSignup from './components/Pages/LoginSignup.jsx'

function App() {
  

  return (
    <>
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Shop/>}></Route>
        <Route path='/men' element={<ShopCategory category="men"/>}></Route>
        <Route path='/women' element={<ShopCategory category="women"/>}></Route>
        <Route path='/kids' element={<ShopCategory category="kids"/>}></Route>
        <Route path='/product' element={<Product/>}>
        <Route path=':productId' element={<Product/>}></Route>
        </Route>
        <Route path='/cart' element={<Cart/>}></Route>
        <Route path='/login' element={<LoginSignup/>}></Route>
      </Routes>
      </BrowserRouter>
    </>
    
  )
}

export default App
