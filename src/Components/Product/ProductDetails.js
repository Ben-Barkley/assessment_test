import React from 'react'
import Food1 from '../../images/food1.jpg'
import { useParams } from 'react-router-dom'


const ProductDetails = ({foods}) => {

    const {name, price} = useParams()
  return (
    <div className='card-detail'>
        <div className='card-detail-images'>
        <img src= {Food1} alt="" />

        </div>
        <div className='card-detail-value'>
            
          
            <button class="normal">Add To Cart</button>
        <h3> {name} </h3>
        <p> {price} </p>
        
        </div>
        
    </div>
  )
}

export default ProductDetails