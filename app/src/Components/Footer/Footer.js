import React from 'react'
import "./Footer.scss";

function Footer() {
  return (
  
    <section className='footer'>

      <div className='footer1'>
        
    <div className='footer-get'><h1> get<span>linked</span></h1>
    <p>Getlinked Tech Hackathon is a technology innovation program 
established by a group of organizations with the aim of showcasing 
young and talented individuals in the field of technology</p>
    
<div className='privacy'><p>Terms of Use <span>Privacy Policy</span></p></div>
    </div>

 
   

<div className='footer-use'>
<h5><span>Useful Links</span></h5>
<p>overview</p>
<p>Timeline</p>
<p>FAQs</p>
<p>Register</p>

<div className='follow'  >
    <div><h5>follow us</h5></div>
    <div className='social'>
    <img src="./HackImages/instagram.png" alt=""/>
    <img src="./HackImages/twitter.png" alt=""/>
    <img src="./HackImages/facebook.png" alt=""/>
    <img src="./HackImages/linkedin.png" alt=""/>
    </div>
  
</div>
</div>



<div className='footer-contact'>
    <div><h5>Contact Us</h5></div>
 <div className='number'>      <img src="./HackImages/phone.png" alt=""/> <p>+2346707653444</p></div>

 <div className='mail'> <img src="./HackImages/location.png" alt=""/> 
 <div>
    <p>27,Alara Street</p>
    <p>Yaba 100012</p>
    <p>Lagos State</p>
    
</div></div>
   
</div>

      </div>
      <div className='copyright'><p>All rights reserved. © getlinked Ltd.</p></div>









       


   

  

    
</section>


  

  )
}

export default Footer
