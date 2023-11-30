import React from 'react'
import { Link } from 'react-router-dom'

const NavBarNoAuth = () => {
  return (
    <ul className='nav-ul'>
      <li>
        <Link to="/login" style={{ textDecoration: 'none' }}>
          Login
        </Link>
      </li>
      <li>
        <Link to="/register" style={{ textDecoration: 'none' }}>
          Register
        </Link>
      </li>
    </ul>
  );
};

export default NavBarNoAuth