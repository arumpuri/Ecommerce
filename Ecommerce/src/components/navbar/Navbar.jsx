import React from 'react'
import './Navbar.css'

import cart_icon from '../../assets/cart_icon.png'
import logo from '../../assets/logo.png'

const Navbar = () => {
  return (
    <div className='navbar'>
    <div className='nav-logo'>
    <img src={logo} alt="" />
      <p>Monggo</p>
    </div>
    <ul className='nav-menu'>
      <li>Shop<hr/></li>
      <li>Men</li>
      <li>Women</li>
      <li>Kids</li>
    </ul>
    <div className="nav-login-cart">
      <button>Login</button>
      <img src={cart_icon} alt="cart" />
      <div className="nav-cart-count">0</div>
    </div>
  </div>
  )
}

export default Navbar