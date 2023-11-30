import React from 'react'
import { Link } from 'react-router-dom'

const NavBarAuth = ({ handleLogout }) => {
  return (
    <ul className='nav-ul'>
      <li>
        <Link to="/addPost" style={{ textDecoration: 'none' }}>
          New Post
        </Link>
      </li>
      <li>
        <Link to="/posts" style={{ textDecoration: 'none' }}>
          Show All
        </Link>
      </li>
      <li>
        <Link to="/profile" style={{ textDecoration: 'none' }}>
          Profile
        </Link>
      </li>
      <li>
        <button onClick={handleLogout}>Logout</button>
      </li>
    </ul>
  )
}

export default NavBarAuth