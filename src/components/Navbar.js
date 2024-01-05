import React from 'react'
import { Link } from 'react-router-dom'
import { logOut } from '../utils/auth'

const Navbar = () => {
    
  return (
    <nav className="d-flex bg-dark p-3 px-5 text-light">
        <span className='fs-4'>
      User Dashboard
      </span>
      <span className="ms-auto">
      <button className='btn btn-outline-light' onClick={()=>{logOut()}}> Logout </button>
      </span>
    </nav>
  )
}

export default Navbar
