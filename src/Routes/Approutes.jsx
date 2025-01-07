import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Products from "../Components/Products"
import Addproducts from '../Components/Addproducts'
import Home from "../Components/Home"

const Approutes = () => {
  return (
    <>
    <Routes>
        <Route path='/' element={<Home/>}/>
    <Route path='/products' element={<Products/>}/>
     <Route path='/add-products/:id?' element={<Addproducts/>}/>
    
       
    </Routes>
    </>
  )
}

export default Approutes