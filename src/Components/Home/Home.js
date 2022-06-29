import React from 'react'
// import { Link } from 'react-router-dom'
import Contact from '../Contact.js/Contact'
import Product from '../Product/Product'
import './style.css'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import Food1 from '../../images/food1.jpg'
import ProductDetails from '../Product/ProductDetails'


function Home({foods}) {
  const {name, price} = useParams()
  return (
    <div>
        Home Page
       
        {/* <Link to='/about' >  <button> About Page</button> </Link>  */}

          {/* <ProductDetails/> */}
          <Product/>

          <Contact/>
        
    </div>
  )
}

export default Home