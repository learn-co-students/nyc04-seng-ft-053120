import React from 'react'

const NavBar = (props) => {

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
            value={props.searchTerm}
            onChange={event => props.handleSearchChange(event.target.value)}
          />
          <input type="submit" value="🔍" />
        </form>
        <nav>
          <strong>Sign In</strong>
        </nav>
      </div>
    </header>
  )
}

export default NavBar