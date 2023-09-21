import React from 'react'
import './Intro.scss'

function Intro() {
  return (
    <div>
     <section className='intro'>
        <div className='intro-highlight'>
            <div className='intro-highlight1'><h1>Igniting a Revolution in HR Innovation</h1>
        <img src="./HackImages/IconImage/Underline.png" alt=""/></div>
        </div>
        
        <div className='intro-sub'>
             <div className='intro-text'>
            <div className='intro-text1'>
                <div> <img src="./HackImages/IconImage/Underline.png" alt=""/></div>
                <h1>getlinked Tech</h1>
                <h1>Hackathon  <span>1.0</span><span>  <img src="./HackImages/IconImage/Chain.png" alt=""/>  <img src="./HackImages/IconImage/Spark.png" alt=""/></span></h1>
            </div>
            <div className='intro-text2'>
                <p>Participate in getlinked tech Hackathon 2023 stand  a chance to win a Big prize</p>
                <button className='register'>Register</button>
            </div>
            <div className='intro-time'><span>00</span>H<span>00</span>M  <span>00</span>S  </div>
        </div>
         <div className='intro-image'> 
            {/* <div className='intro-image1'><img src="./HackImages/image1.png" alt=""/></div> */}
            <div >
                 <div className='intro-image2'><img src="./HackImages/image1.png" alt=""/></div>
                <div className='intro-image3'><img src="./HackImages/Image 1.1.png" alt=""/></div>
            </div>
        </div>
        </div>
       
    </section>
    <section className='intro2'>
        <div>
            <div>
                <img src="./HackImages/image2.png" alt=""/>
               
            </div>
        </div>
         <div></div>
    </section>
    </div>

    

  )
}

export default Intro
