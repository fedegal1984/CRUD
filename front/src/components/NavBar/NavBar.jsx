import React from 'react'
import NavBarNoAuth from './NavBarNoAuth'
import NavBarAuth from './NavBarAuth'
import { Link } from 'react-router-dom'
import "./NavBar.css"

const NavBar = ({ isLoggedIn, handleLogout }) => {
  return (
    <nav className='nav-container'>
      <h1 className='navbar-link'>Mi Anotador</h1>
      {isLoggedIn ? <NavBarAuth handleLogout={handleLogout} /> : <NavBarNoAuth />}
    </nav>
  );
};

export default NavBar