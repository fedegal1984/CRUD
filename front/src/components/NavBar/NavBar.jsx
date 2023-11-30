import React from 'react'
import NavBarNoAuth from './NavBarNoAuth'
import NavBarAuth from './NavBarAuth'
import { Link } from 'react-router-dom'
import "./NavBar.css"

const NavBar = ({ isLoggedIn, handleLogout }) => {
  return (
    <nav className='nav-container'>
      <Link to="/" style={{ textDecoration: 'none' }} className='navbar-link'>Home</Link>
      {isLoggedIn ? <NavBarAuth handleLogout={handleLogout} /> : <NavBarNoAuth />}
    </nav>
  );
};

export default NavBar