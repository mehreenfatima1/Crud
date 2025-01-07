import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
    const navBar=[{
        name:"Products",
        url:"./products"
      }]
  return (
    <>
    <div className='container'>
        <h1>CRUD APP</h1>
        <nav>
            <ul>
            {navBar.map((items,index)=>{
          return(
            <li key={index}><NavLink to={items.url}>{items.name}</NavLink>
            </li>
          )
        })}
            </ul></nav>

    </div>
    </>
  )
}

export default Header