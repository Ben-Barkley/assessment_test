import React from 'react'
import './navbar.css'
import {Link} from 'react-router-dom'

function Navbar() {
  return (
    <div className='navbar'>
        <h1>AryaP</h1>

        <ul className="nav-links">

                <li>  <Link className='navlinktag' to='/'> Home</Link>  </li>
                <li>  <Link className='navlinktag' to='/about'> About</Link>   </li>
                <li> <Link className='navlinktag' to='/product'> Product</Link></li>
                <li> <Link className='navlinktag' to='/contact'> Contact</Link></li>
        </ul>
    </div>
  )
}

export default Navbar