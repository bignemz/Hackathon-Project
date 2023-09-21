import React from 'react'

import "./Homepage.scss"
import Navbar from '../../Components/Navbar/Navbar'
import Intro from '../../Components/Introduction/Intro'

function Homepage() {
  return (
    <div className='Home'>
       <Navbar/>
      <Intro/>
       
    </div>
  )
}

export default Homepage
