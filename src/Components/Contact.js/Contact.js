import React from 'react'
import { Link } from 'react-router-dom';
import Footer from '../Footer/Footer';
import contactimg from '../../images/contactimg.jpg'
import './contact.css'

const Contact = () => {

  return (
    <section id='contact'>
      <div className='contact-image'>
      <img src={contactimg} />
       
      </div>

      <div className='contact-text'>

        <h1> Address: 845, Las Vegas city, riverland</h1>
        <h1>Email: support.aryap@gmail.com</h1>

      </div>

      
      
    </section>

    

    
  )
}

export default Contact