import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Products from "../Components/Products"
import Addproducts from '../Components/Addproducts'

const Approutes = () => {
  return (
    <>
    <Routes>
    <Route path='/products' element={<Products/>}/>
     <Route path='/add-products/:id?' element={<Addproducts/>}/>
    
       
    </Routes>
    </>
  )
}

export default Approutes