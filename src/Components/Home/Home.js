import React from 'react'
// import { Link } from 'react-router-dom'
import './style.css'
// import { Link } from 'react-router-dom'
import Rectangle from '../../images/Rectangle.png'
// import { Container } from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faVrCardboard, faStore, faHouse, faPersonDress, faPlane, faSchool, faWifi, faCircleCheck} from '@fortawesome/free-solid-svg-icons'
import {faApple, faGooglePlus, faGithub} from '@fortawesome/free-brands-svg-icons'
import Border from '../../images/Border.png'
import MacBook from '../../images/MacBook.png'
import Group from '../../images/Group.png'
// , faCircleCheck




function Home() {
  
  return (
    <div className='body  m-5  '>
      <section>

      
<div class="container">
  <div class="row">
    <div class="col">
    <div className='details col-lg-6'>
          <h1 className='hero-heading row-6'>
            Become a Merchant
            </h1>
            <p className='prgps row-6'>We strive to provide a space where guests can connect with themselves and explore their full potential, offering a safe place.</p>

            <div className="hero2 d-flex">
            <button >Become a Merchant </button> <p>Already have an account? Log In</p>
            
            </div>
          </div>
    </div>
    <div class="hero-img col-lg-10">
     <img src={Rectangle} alt="" />
    </div>






  </div>
  
</div>
</section>

      {/* How does it work */}
        <section className='banner'>
          <div className="container">
            <div className="row">
              <div className="col">
          <div className="brands col-lg-10">
      <h1 className='align-center justify-content-center'>Trusted by over 200+ merchants</h1>
      <div className='brands-icon'>
            
                 <FontAwesomeIcon className='icons' icon={faApple} />
                 <FontAwesomeIcon className='icons' icon={faGooglePlus}  />
                
                <FontAwesomeIcon className='icons' icon={faVrCardboard}  />
                 <FontAwesomeIcon className='icons' icon={faGithub}  />       
            </div>
      </div>


          <div className="body-details col-lg-6 ">
            <h1>How does it work?</h1>
            <p>Take is a platform that helps individuals purchase what they could not normally afford, 100% online and no credit check.</p>
          </div>
                        <div class="container mt-5">
                <div class="row">
                  <div class="col-sm">
                   <div className="content-icon">
                   <h4 className='cont-icn d-flex'>1 <span className='dash'>............................</span></h4>
                   <h3>Sign up on platform</h3>
                   <p>We strive to provide a space where guests can connect with themselves and explore their full potential, offering a safe place.</p>
                   </div>
                  </div>

                  <div class="col-sm">
                  <div className="content-icon">
                   <h4 className='cont-icn d-flex'>2 <span className='dash'>............................</span></h4>
                   <h3>Set up your merchant store</h3>
                   <p>We strive to provide a space where guests can connect with themselves and explore their full potential, offering a safe place.</p>
                   </div>
                  </div>

                  <div class="col-sm">
                  <div className="content-icon">
                   <h4 className='cont-icn d-flex'>3 <span className='dash'>............................</span></h4>
                   <h3>Integrate our API in store</h3>
                   <p>We strive to provide a space where guests can connect with themselves and explore their full potential, offering a safe place.</p>
                   </div>
                  </div>

                  <div class="col-sm">
                  <div className="content-icon">
                   <h4 className='cont-icn d-flex'>4 <span className='dash'></span></h4>
                   <h3>Start selling out</h3>
                   <p>We strive to provide a space where guests can connect with themselves and explore their full potential, offering a safe place.</p>
                   </div>
                  </div>

                </div>
              </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* hero3 */}

        <section>
                              <div class="container">
                        <div class="row">
                          <div class="hero3-icons col mt-4 ">
                          <div class="content2-icon container">
  <div class="row align-items-start">
                            <div class="each-cont-icon col">
                            <FontAwesomeIcon className='cont2-icn' icon={faStore} />
                            <p>Online retail store</p>
                            </div>

                            <div class="each-cont-icon col">
                            <FontAwesomeIcon className='cont2-icn' icon={faHouse} />
                            <p>Furniture and household store</p>
                            </div>

                            <div class="each-cont-icon col">
                            <FontAwesomeIcon className='cont2-icn' icon={faPersonDress} />
                            <p>Fashion Store</p>
                            </div>

                          </div>

                          <div class="row align-items-center">

                            <div class="each-cont-icon col">
                            <FontAwesomeIcon className='cont2-icn' icon={faPlane} />
                            <p>Travel Agency</p>
                            </div>

                            <div class="each-cont-icon col">
                            <FontAwesomeIcon className='cont2-icn ' icon={faSchool}/>
                            <p>Schools</p>
                            </div>

                           <div class="each-cont-icon col">
                            <FontAwesomeIcon className='cont2-icn' icon={faWifi} />
                            <p>Subscription based services</p>
                            </div>

                          </div>

                         
                        </div>
                                                  </div>

                          <div class="hero3-details col mt-4">
                            <h2>No matter your business, we have you covered</h2>
                            <p>Takke is a platform that helps individuals purchase what they could not normally afford, 100% online and no credit check.</p>
                          
                          </div>
                        
                          
                        </div>
                      </div>
        </section>



        {/* hero4 */}

        <section className='banner2'>

                                <div class="banner2-cont container">
                          <div class="row">
                            <div class="col">
                            <div className="main-details col-lg-6 ">
            <h1>Track your sales in real time. No hassles</h1>
            <div className="contz d-flex"><FontAwesomeIcon className='cont4-icn ' icon={faCircleCheck}/>  
            <li> We strive to provide a space where guests can connect with themselves and explore their full potential, offering a safe place.</li></div>
            
            <div className="contz d-flex"><FontAwesomeIcon className='cont4-icn ' icon={faCircleCheck}/>  
            <li> We strive to provide a space where guests can connect with themselves and explore their full potential, offering a safe place.</li></div>

            <div className="contz d-flex"><FontAwesomeIcon className='cont4-icn ' icon={faCircleCheck}/>  
            <li> We strive to provide a space where guests can connect with themselves and explore their full potential, offering a safe place.</li></div>
            
          </div>
                            
                            
                            </div>


                            
                            <div class="col">
                                            <div class="hero4-img col">
                                             <img src={Border} alt="" />
                                           </div>

                                           <div class="hero5-img col">
                                             <img src={MacBook} alt="" />
                                           </div>
                            </div>
                            
                          </div>
                        </div>
        </section>



        <section className=''>

        <div class="container">
                          <div class="row">
                            <div class="col">
                            <div class="hero6-img col">
                                             <img src={Group} alt="" />
                                           </div>

              
                            
                            
                            </div>


                            
                            <div class="col">
                            <div className="main-details col-lg-6 ">
            <h1>Integrate our payment system easily</h1>
            <div className="contz d-flex"><FontAwesomeIcon className='cont4-icn ' icon={faCircleCheck}/>  
            <li> We strive to provide a space where guests can connect with themselves and explore their full potential, offering a safe place.</li></div>
            
            <div className="contz d-flex"><FontAwesomeIcon className='cont4-icn ' icon={faCircleCheck}/>  
            <li> We strive to provide a space where guests can connect with themselves and explore their full potential, offering a safe place.</li></div>

            <div className="contz d-flex"><FontAwesomeIcon className='cont4-icn ' icon={faCircleCheck}/>  
            <li> We strive to provide a space where guests can connect with themselves and explore their full potential, offering a safe place.</li></div>
            
            <div className="hero5-btn ">
            <button >Takke API Documentation </button> 
            
            </div>
          </div>
                            </div>
                            
                          </div>
                        </div>
        
        </section>
        
       
        

        
         

    </div>
  )
}

export default Home