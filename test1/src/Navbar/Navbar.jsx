import React from 'react'
import {Link} from 'react-router-dom'
import './Navbar.css'
const Navbar = () => {
  return (
    <div className="navbar">
        <div>
            <Link to={'/'}>Home</Link>
        </div>
        <div>
        <Link to={'/login'}>Login</Link>
        </div>
        <div>
        <Link to={'/appointment'}>Appointment</Link>
        </div>
        <div>
        <Link to={'/add'}>Add Appointment</Link>
        </div>
    </div>
  )
}

export default Navbar