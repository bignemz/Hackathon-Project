import React, { useRef }from 'react'
import "./Navbar.scss"
import { Link  } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link';
 


function Navbar( props) {
 
  const navRef=useRef()
  const btnRef= useRef()
  const closeRef=useRef()



  const {display,show,hide}=props
  
  console.log(props.show)

  function showNavbar(props){
    navRef.current.classList.toggle("reponsive");
  

  

   
  }
  

  function removeNavbar(props){
    navRef.current.classList.remove("reponsive");
  
   
 

  

 

  }




  return (
    <nav  className="navbar">
        {  <h1 className="nav-logo">
          get<span className="logo">linked</span>
        </h1>}
        <div ref={navRef} className="nav-links">
        <button ref={closeRef}  className=' btn nav-close ' onClick={removeNavbar} ><i class="fa-solid fa-x"></i></button>
        <HashLink onClick={removeNavbar} className='link' smooth to='/'>Timeline</HashLink>
        <HashLink onClick={removeNavbar}  className='link' smooth to='/#overview'>Overview</HashLink>
        <HashLink   onClick={removeNavbar} className='link' smooth to='#FAQs'>FAQs</HashLink>
        <HashLink   onClick={removeNavbar} className="link" to="/contact">Contact</HashLink>

        <Link to="/register">
        <button className="register">Register</button>
        </Link>
      

     

        </div>
       <div className='addto'> 
       
      { <button ref={btnRef} className='nav-open btn' onClick={showNavbar}><img  src="./HackImages/burger.png" alt=""/></button>}
       
       </div>

  
    </nav>
  )
}

export default Navbar