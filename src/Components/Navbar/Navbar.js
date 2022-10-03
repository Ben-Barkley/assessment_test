import React from 'react'
import './navbar.css'
import {Link} from 'react-router-dom'

function Navbar() {
  return (
    <div className='navbar'>
        <h1>Merchant</h1>

        <ul className="nav-links">

                <li>  <Link className='navlinktag' to='/'> Support</Link>  </li>
                
                <li> <Link className='navlinktag' to='/product'> Developers</Link></li>
                
                <li> <Link className='navlinktag' to='/createplan'> <span>Become a Merchant </span> </Link></li>

        </ul>
    </div>
  )
}

export default Navbar