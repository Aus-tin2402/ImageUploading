import React from 'react'
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom'
import './NavBar.css'
const NavBar = () => {
  return (
    <nav>
        <div className="logo">
              <img src={logo} alt="imagePNG" />
        </div>
        <section className="nav-links">
            <Link to='/upload' className='links' >Upload Image</Link>
            <Link to='/update' className='links' >Update Image</Link>
            <Link to='/fetchID' className='links' >FindBy ID</Link>
            <Link to='/findAll' className='links' >Find ByAll</Link>
            <Link to='/remove' className='links' >Remove Image</Link>
        </section>  
    </nav>
  )
}

export default NavBar