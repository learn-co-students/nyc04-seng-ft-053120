import React from 'react'

const NavBar = ({ searchTerm, onSearchChange }) => {

  return (
    <header>
      <div className="top-nav">
        <div className="logo">
          <h2>AlienWares</h2>
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
          <button>View Listings</button>
          <button>Add Listing</button>
        </nav>
      </div>
    </header>
  )
}

export default NavBar