import React from 'react'
import { Link } from 'react-router-dom'
import './Product.css'
 

const Product = ({foods}) => {

  

  return (
    <div className='productdetails'>
      
      <h1>product page</h1>

      <div className='cards'>
        {
          foods && foods.map((food) =>
            <div className='card-box'>
              <Link to={`${food.foodname}/${food.price}`}> 
              <div className='card-images'>

              <img src= {food.image} alt="" />
            </div>

            <p>{food.foodname}</p>
            <p>{food.price}</p>
            
              </Link>
            
          </div>
           ) 
        }
          

      </div>
      
    </div>
    
    
  )
}

export default Product