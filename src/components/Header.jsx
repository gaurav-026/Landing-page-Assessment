import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <>
      <header>
        <h2>LOGO</h2>
        <div className="button-frame">
          <h6>Login</h6>
          <button className='signup-button'>Signup</button>
        </div>
      </header>
      <nav>
        <NavLink  >           <h5>Overview</h5></NavLink>
        <NavLink> <h5>Curriculum</h5></NavLink>
        <NavLink><h5>Refund</h5></NavLink>
        <NavLink><h5>Testimonials</h5></NavLink>

      </nav>
    </>
  )
}

export default Header
