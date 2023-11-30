import React from 'react'
import { Link } from 'react-router-dom'

const NavBarNoAuth = () => {
  return (
    <ul className='nav-ul'>
      <li>
        <Link to="/login" style={{ textDecoration: 'none', fontWeight: 200, fontSize: 30 }} className='navbar-link'>
          Login
        </Link>
      </li>
      <li>
        <Link to="/register" style={{ textDecoration: 'none', fontWeight: 200, fontSize: 30 }} className='navbar-link'>
          Register
        </Link>
      </li>
    </ul>
  );
};

export default NavBarNoAuth