import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faClock, faMailBulk,faAddressBook} from '@fortawesome/free-solid-svg-icons'
import {faFacebook, faTwitter, faInstagram, faYoutube} from '@fortawesome/free-brands-svg-icons'
import './footer.css'



const Footer = () => {
  return (
    <section id='footer'>
        <div className='opening-hrs'>
        <h2>Opening Hours</h2>
            <div className='days-time'>
               
                <div className='days'>
                <ul>
                <li>Monday  </li>
                <li>Tuesday  </li>
                <li>Wednesday  </li>
                <li>Thursday  </li>
                <li>Friday  </li>
                <li>Saturday  </li>
                <li>Sunday  </li>
            </ul>
                </div>

            <div className='time'>
            <ul>
                <li>11:00 - 20:00 <FontAwesomeIcon icon={faClock} /> </li>  
                <li>11:00 - 20:00 <FontAwesomeIcon icon={faClock} /> </li>
                <li>11:00 - 20:00 <FontAwesomeIcon icon={faClock} /> </li>
                <li>11:00 - 20:00 <FontAwesomeIcon icon={faClock} /> </li>
                <li>11:00 - 20:00 <FontAwesomeIcon icon={faClock} /> </li>
                <li>10:00 - 18:00 <FontAwesomeIcon icon={faClock} /> </li>
                <li>10:00 - 18:00 <FontAwesomeIcon icon={faClock} /> </li>
            </ul>
            </div>

            </div>
            
        </div>

        <div className='media'>
            <div className='media-info'><h3>Our Socials</h3></div>
            
            <div className='social-media'>
           <i><a href="http://www.google.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faFacebook} color="blue"/> </a></i> 
            <i>  <FontAwesomeIcon icon={faTwitter} color="blue"/> </i> 
           <i><FontAwesomeIcon icon={faInstagram} color="red"/> </i>  
            <i><FontAwesomeIcon icon={faYoutube} color="red"/> </i>
            </div>
      
        </div>

        <div className='contact'>
        <h3>Address</h3> 
         <p> <FontAwesomeIcon icon={faAddressBook}/> 845, Las Vegas city, riverland </p>
         <p> <FontAwesomeIcon icon={faMailBulk}/> Email: support.aryap@gmail.com </p>
        </div>

        <div className='copyright'>
          <h4>© Aryap 2022</h4>
        </div>
        

       

    </section>
  )
}

export default Footer