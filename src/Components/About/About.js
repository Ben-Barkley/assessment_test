import React from 'react'
import Box from '../Home/Box'
import './about.css';
import food1 from '../../images/food1.jpg'
import person1 from '../../images/person1.jpg'
import food3 from '../../images/food3.jpg'
import food4 from '../../images/food4.jpg'
import homepage from '../../images/homepage.jpg'

const About = () => {
  return (
    <div className='aboutbox'>
      <h1>About Us</h1>

      <div class="image">
        <img src= {homepage} alt="" />
    </div>
    {/* info */}
    <section id='info'>
      <h1>Our Story</h1>
      <p>
      SH is a contemporary Parisian bistro showcasing techniques in US but influenced by our regionality, carefully providing only the best ingredients home and abroad. <br />Our home is the ideal place to be for cool relaxation, refreshing drink, good local & international dishes and many more. <br />Our menus draw inspiration from the Roman cooking tradition to create soulful food that celebrates the restaurant's ongoing relationship with its local family of farmers and suppliers. This enables our genuine approach to food & hospitality to shine. 
      </p>
    </section>


    {/* service */}
    <section id='service'>
      <div className='title-text'> 
      <h1>Explore Our Foods</h1>
      </div>

      <div className='service-box'>
        <div className='single-service'>
          <img src= {food1} />
          <div className='overlay'></div>
          <div className='service-desc'>
            <h3>Salade Nicoise</h3>
            <hr />
            <p>This meal is a fresh light meal.</p>
          </div>

        </div>

        <img src="images/" alt="" />

        <div className='single-service'>
          <div className='img-resize1'>
          <img src= {person1} />
          </div>
          <div className='overlay'></div>
          <div className='service-desc'>
            <h3>Happy to help</h3>
            <hr />
            <p>The smile we bring to our customers face is second to none.</p>
          </div>

        </div>

        <div className='single-service'>
          <div className='img-resize2'>
          <img src= {food3} />
          </div>
         
          <div className='overlay'></div>
          <div className='service-desc'>
            <h3>Chips and Burger</h3>
            <hr />
            <p>Come experience our palatable chips and burger amongst our other varieties.</p>
          </div>

        </div>

        <div className='single-service'>
          <div className='img-resize3'>
          <img src= {food4} />
          </div>
          
          <div className='overlay'></div>
          <div className='service-desc'>
            <h3>Duck Confit</h3>
            <hr />
            <p>Its a delicacy that you need to try.</p>
          </div>

        </div>

        
      </div>






    <script type='text/javascript' src='//www.opentable.com/widget/reservation/loader?rid=108955&type=standard&theme=standard&color=1&iframe=true&domain=com&lang=en-US&newtab=false&ot_source=Restaurant%20website'></script>

    </section>

    


    
    </div>
  )
}

export default About