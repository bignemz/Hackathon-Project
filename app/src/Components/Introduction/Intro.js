import React, { useEffect, useState } from 'react'
import './Intro.scss'
import {motion, useAnimation} from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const Intro = ()=> {

    const boxVariant={
        visible:{ opacity:1, scale:1,transition:{duration: 0.5,delay:1} },
        hidden:{ opacity:1, scale:0 }
      }

      const sizeVariant={
        visible:{ opacity:1, scale:1,transition:{duration: 0.3 ,delay:0.5} },
        hidden:{ opacity:1, scale:0 }
      }

      const slideVariant={
        visible:{   initial:{y:1000} ,animate:{y:0}, transition:{duration:1,delay:0.5}}
        
        
   
      }
    
      const control= useAnimation()
     const[ref,inView]=useInView()
    
      useEffect(()=>{
    
      if (inView) {
        control.start("visible")
      }

     },[control,inView])

   

    const [Hour, SetHour] =useState(0)
    const [Minute, SetMinute] =useState(0)
    const [Second, SetSecond] =useState(0)



    useEffect(() => {
        const interval = setInterval(() => {
          const now = new Date();
          SetHour(now.getHours());
          SetMinute(now.getMinutes());
          SetSecond(now.getSeconds());
        }, 1000);
    
        return () => clearInterval(interval);
      }, []);
  

    


        



    

  return (
    <div  className='intro-sec'>
     <section className='intro'>
        <div className='intro-highlight'>
            <div className='intro-highlight1'><h1>Igniting a Revolution in HR Innovation</h1>
        <img src="./HackImages/IconImage/Underline.png" alt=""/></div>
        </div>
        
        <div className='intro-sub'>
             <motion.div
            initial={{y:-1000}}
            animate={{y:0}}
            transition={{duration:0.5,delay:0.5}} className='intro-text'>
            <div  className='intro-text1'>
                <div className='bulb'> <img src="./HackImages/IconImage/bulb.png" alt=""/></div>
                <h1>getlinked Tech</h1>
                <h1>Hackathon  <span>1.0</span><span>  <img src="./HackImages/IconImage/Chain.png" alt=""/>  <img src="./HackImages/IconImage/Spark.png" alt=""/></span></h1>
            </div>
            <div
          
             className='intro-text2'>
                <p>Participate in getlinked tech Hackathon 2023 stand  a chance to win a Big prize</p>
                <button className='register'>Register</button>
            </div>
            <div className='intro-time'><span>{Hour}</span>H<span>{Minute}</span>M  <span>{Second}</span>S  </div>
        </motion.div>
         <div className='intro-image'> 
            
            <motion.div
            initial={{y:1000}}
            animate={{y:0}}
            transition={{duration:0.5,delay:0.5}}
   >
                 <div className='intro-image2'><img src="./HackImages/image1.png" alt=""/></div>
                <div className='intro-image3'><img src="./HackImages/Image 1.1.png" alt=""/></div>
            </motion.div>
        </div>
        </div>
       
    </section>
    <section className='intro2'>
        <div
       
        >
 <motion.div
     initial={{x:-1000}}
     animate={{x:0}}
     transition={{duration:0.5,delay:1}}
   
            
            className='intro2-image'>
                <img src="./HackImages/image2.png" alt=""/>
               
            </motion.div>
        </div>
        <motion.div
    ref={ref}
    variants={slideVariant}
    animate={control}
    initial="hidden"
       
     
    className='intro2-text' id='overview'>
            <h1>Introduction to getlinked
<span>tech Hackathon 1.0 </span></h1>
            <p>Our tech hackathon is a melting pot of visionaries, and its purpose is as clear as day: to shape the future. Whether you're a coding genius, a design maverick, or a concept wizard, you'll have the chance to transform your ideas into reality. Solving real-world problems, pushing the boundaries of technology, and creating solutions that can change the world, that's what we're all about!</p>
         </motion.div>
    </section>

    <section className='intro3'>
    
        <motion.div
          ref={ref}
          variants={slideVariant}
          animate={control}
          
        className='intro3-text'>
            <h1>Introduction to getlinked
            <span>tech Hackathon 1.0 </span></h1>
            <p>Our tech hackathon is a melting pot of visionaries, and its purpose is as clear as day: to shape the future. Whether you're a coding genius, a design maverick, or a concept wizard, you'll have the chance to transform your ideas into reality. Solving real-world problems, pushing the boundaries of technology, and creating solutions that can change the world, that's what we're all about!</p>
         </motion.div>
        
       
         <motion.div
    ref={ref}
    variants={boxVariant}
    animate={control}
    initial="hidden"
         className='intro3-image'>
                <img src="./HackImages/image3.png" alt=""/>
               
            </motion.div>
    </section>

    <section
        className='intro4'>
    
    <motion.div
        className='intro4-image'>
            <img src="./HackImages/image4.png" alt=""/>
           
        </motion.div>
    
   
        <motion.div
       className='intro4-text'>
            <h1>Introduction to getlinked
            <span>tech Hackathon 1.0 </span></h1>
            <p><span>Innovation and Creativity:</span> Evaluate the uniqueness and creativity of the solution. Consider whether it addresses a real-world problem in a novel way or introduces innovative features.</p>
            <p><span>Functionality:</span> Assess how well the solution works. Does it perform its intended functions effectively and without major issues? Judges would consider the completeness and robustness of the solution.</p>
            <p><span>Impact and Relevance: </span>Determine the potential impact of the solution in the real world. Does it address a significant problem, and is it relevant to the target audience? Judges would assess the potential social, economic, or environmental benefits.</p>
            <p><span>Impact and Relevance: </span>Determine the potential impact of the solution in the real world. Does it address a significant problem, and is it relevant to the target audience? Judges would assess the potential social, economic, or environmental benefits.</p>
            <p><span>Technical Complexity: </span>Evaluate the technical sophistication of the solution. Judges would consider the complexity of the code, the use of advanced technologies or algorithms, and the scalability of the solution.</p>
            <p><span>Adherence to Hackathon Rules:</span> Judges will Ensure that the team adhered to the rules and guidelines of the hackathon, including deadlines, use of specific technologies or APIs, and any other competition-specific requirements.</p>

            <button className='register'>Register</button>
            
         </motion.div>
    </section>
    <section className='intro5'>
    
    <motion.div
        className='intro5-text' id='FAQs' >
        <h1>Frequently Ask<span>Question </span></h1>
        <p className='text1'>We got answers to the questions that you might want to ask about getlinked Hackathon 1.0!</p>

        <div className='intro5-quest'>
        <p>Can I work on a project I started before the hackathon?<span>+</span> </p>
        </div>
        <div className='intro5-quest'>
        <p>What happens if I need help during the hackathon?<span>+</span> </p>
        </div>
        <div className='intro5-quest'>
        <p>What happens if I don't have an idea for a project?<span>+</span></p>
        </div>
        <div className='intro5-quest'>
        <p>Can I join a team or do I have to come with one?<span>+</span> </p>
        </div>
        <div className='intro5-quest'>
        <p>What happens after the hackathon ends<span>+</span></p>
        </div>
        <div className='intro5-quest'>
        <p>Can I work on a project I started before the hackathon?<span>+</span></p>
        </div>
        


     </motion.div>
    
   
     <motion.div
        className='intro5-image'>
            <img src="./HackImages/image6.png" alt=""/>
           
        </motion.div>
</section>

<section className='intro6'>
    
    <motion.div
      className='intro6-text'  id='Timeline'>
        <h1>Timeline</h1>
        <p>Here is the breakdown of the time we anticipate using for the upcoming event.</p>
     </motion.div>
    
   
     <motion.div
         className='intro6-para'>
        <div className='intro6-para1'>
            <div className='intro6-header  note'>
                <h1><span>Hackathon Announcement</span></h1>
                <p>The getlinked tech hackathon 1.0 is formally announcedto the general public and teams begin to get ready to register</p>
            </div>
            <div className='intro6-mid one'><h3>1</h3></div>
            <div className='intro6-tail date'><h1><span>November 18, 2023</span></h1></div>
        </div>
        <div className='intro6-para1'>
        <div className='intro6-header date'>
        <h1><span>November 18, 2023</span></h1>
            </div>
            <div className='intro6-mid two'><h3>2</h3></div>
            <div className='intro6-tail note'><h1><span>Teams Registration begins</span></h1>
                <p>Interested teams can now show their interest in the getlinked tech hackathon 1.0 2023 by proceeding to register</p></div>
        </div>
        <div className='intro6-para1'>
        <div className='intro6-header note'>
                <h1><span>Teams Registration ends</span></h1>
                <p>Interested Participants are no longer Allowed to register</p>
            </div>
            <div className='intro6-mid three'><h3>3</h3></div>
            <div className='intro6-tail date'><h1><span>November 18, 2023</span></h1></div>
        </div>
        <div className='intro6-para1'>
        <div>
        <h1 className='intro6-header date'><span>November 18, 2023</span></h1>
            </div>
            <div className='intro6-mid four' ><h3>4</h3></div>
            <div className='intro6-tail note'><h1><span>Announcement of the accepted teams and ideas</span></h1>
                <p>All teams whom idea has been accepted into getlinked tech hackathon 1.0 2023 are formally announced</p></div>
        </div>
        <div className='intro6-para1'>
        <div className='intro6-header note'>
                <h1><span>Getlinked Hackathon 1.0 Offically Beginst</span></h1>
                <p>Accepted teams can now proceed to build their  ground breaking skill driven solutions</p>
            </div>
            <div className='intro6-mid five'><h3>5</h3></div>
            <div className='intro6-tail date'><h1><span>November 18, 2023</span></h1></div>
        </div>
        <div className='intro6-para1'>
        <div className='intro6-header date'>
        <h1><span>November 18, 2023</span></h1>
            </div>
            <div className='intro6-mid' ><h3>6</h3></div>
            <div className='intro6-tail note'><h1><span>Demo Day</span></h1>
                <p>Teams get the opportunity to pitch their projects to judges.The winner of the hackathon will also be announced on this day</p></div>
        </div>
            
           
        </motion.div>
</section>
<motion.section
    className='intro7'>
        <div>
            <div className='intro7-image'>
                <img src="./HackImages/image7.png" alt=""/>
               
            </div>
        </div>
         <div className='intro7-text'>
           <div className='intro7-prize'> <h1>Prizes and <span>Rewards </span></h1>
            <p>Rewards</p></div>

            <div className='intro7-medal'>
             <div  className='intro7-medal1 silver' >
                <img src="./HackImages/image8.png" alt=""/>
                <h1>2nd</h1>
                <h3>Runner</h3>
                <h1>N300,000</h1>
                </div>
               
                 <div className='intro7-medal1 gold' >
                <img src="./HackImages/image10.png" alt=""/>
                <h1>1st</h1>
                <h3>Runner</h3>
                <h1>N400,000</h1>
                </div>
             <div className='intro7-medal1 bronze' >
                <img src="./HackImages/image9.png" alt=""/>
                <h1>3rd</h1>
                <h3>Runner</h3>
                <h1>N150,000</h1>
                </div>
               </div> 
         </div>
    </motion.section>
    <motion.section
   className='intro8'>
    
    <div className='intro8-text'>
        <h1>Partners and Sponsors</h1>
        <p>Getlinked Hackathon 1.0 is honored to have the following major 
companies as its partners and sponsors</p>
     </div>
    
   
     <div className='intro8-para'>
        <div className='intro8-para1'>
            
        <img src="./HackImages/company1.png" alt=""/>
           
        </div>
        <div className='intro8-para1'>
        <img src="./HackImages/company2.png" alt=""/>
        
        </div>
        <div className='intro8-para1'>
        <img src="./HackImages/company3.png" alt=""/>
       
        </div>
        <div className='intro8-para1'>
        <img src="./HackImages/company4.png" alt=""/>
       
        </div>
        <div className='intro8-para1'>
        <img src="./HackImages/company5.png" alt=""/>
     
        </div>
        <div className='intro8-para1'>
        <img src="./HackImages/company6.png" alt=""/>
       
        </div>
            
           
        </div>
</motion.section>

<motion.section
     className='intro9'>
    
    <div className='intro9-text'>
        <h1>Privacy Policy and 

        <span>Terms</span></h1>
        <p>Last updated on September 12, 2023</p>
        <p>Below are our privacy & policy, which outline a lot of goodies. 
it’s our aim to always take of our participant</p>

        <div className='intro9-text1' >
            <p>At getlinked tech Hackathon 1.0, we value your privacy
and are committed to protecting your personal information.
This Privacy Policy outlines how we collect, use, disclose, 
and safeguard your data when you participate in our tech 
hackathon event. By participating in our event, you consent 
to the practices described in this policy.</p>

<h2><span>Licensing Policy</span></h2>
<h3>Here are terms of our Standard License:</h3>
<p><span>+</span>The Standard License grants you a non-exclusive right to
navigate and register for our event</p>
<p><span>+</span>You are licensed to use the item available at any free source
sites, for your project developement</p>
<button className='read-more'>Read more</button>
        </div>


     </div>
    
   
     <div className='intro9-image'>
        <div className='intro9-shield'> <img src="./HackImages/shield.png" alt=""/></div>
        <div className='intro9-lock'><img src="./HackImages/lock.png" alt=""/></div>

           
        </div>
</motion.section>



    </div>

    

  )
}


export default Intro
