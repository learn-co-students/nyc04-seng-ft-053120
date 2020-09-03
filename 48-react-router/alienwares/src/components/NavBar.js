import React from 'react'
import { NavLink, useHistory } from 'react-router-dom'

const NavBar = ({ searchTerm, onSearchChange, onPageChange }) => {
  const history = useHistory()

  console.log(history)

  return (
    <header>
      <div className="top-nav">
        <div className="logo">
          <NavLink to="/listings">
            <h2>AlienWares</h2>
          </NavLink>
        </div>
        <form className="search">
          <input
            type="text"
            placeholder="Search listings..."
            value={searchTerm}
            onChange={event => onSearchChange(event.target.value)}
          />
          <input type="submit" value="🔍" />
        </form>
        <nav>
          <NavLink to="/favorites">
            <button>View Favorites</button>
          </NavLink>
          <NavLink to="/listings/new">
            <button>Add Listing</button>
          </NavLink>
        </nav>
      </div>
    </header>
  )
}

export default NavBar