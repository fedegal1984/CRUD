import React from 'react'
import { Link } from 'react-router-dom'
import "./NavBar.css"

const NavBarAuth = ({ handleLogout }) => {
  return (
    <ul className='nav-ul'>
      <li>
        <Link to="/profile" style={{ textDecoration: 'none', fontWeight: 200, fontSize: 30 }} className='navbar-link'>
        <i className="bi bi-person-lines-fill"></i>
        </Link>
      </li>
      <li>
        <button className="logout-btn"onClick={handleLogout}><i className="bi bi-box-arrow-left"></i></button>
      </li>
    </ul>
  )
}

export default NavBarAuth