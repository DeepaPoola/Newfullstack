import React from 'react'
import {Link} from 'react-dom'
import logo from '../Assets/logo.png'

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="nav-logo">
            <img src={logo} alt="" />
            <p>SD FANCY STORE</p>
        </div>
        <ul className="nav-menu">
            <li><Link to="/">Shop</Link></li>
        </ul>


    </div>
  )
}

export default Navbar