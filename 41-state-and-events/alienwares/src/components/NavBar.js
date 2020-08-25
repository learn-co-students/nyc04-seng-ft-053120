import React from 'react'

const NavBar = () => {

  return (
    <header>
      <div className="top-nav">
        <div className="logo">
          <h2>AlienWares</h2>
        </div>
        <form className="search">
          <input type="text" placeholder="Search listings..." />
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