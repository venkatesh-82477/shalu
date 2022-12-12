import React from 'react'
import '../home.avif'
import '../panda.png'
import { useNavigate } from 'react-router-dom'
const Home = () => {
  const navigate =useNavigate();
  const handleClick=()=>{
    navigate('/Quotes')
  }
  return (
    <div className='home'>
        <h3 className='head'>🎊🎆 WELCOME <span className='head1'>SHALINI</span><span className='head2'> V P</span> 🎆🎊</h3>
        <br></br><br></br><br></br>
        <div className='text'>
          <p className='pp'>Hi Panda,you are the most important person in my life.You understood my situations whatever and whenever i faced some problems and also you understood about me.I never forgot you.</p>
          </div><br></br><br></br>
          <div className='text1'><p className='p'>Please, don't look<br></br> at me seriously.<br></br>Click the below button.</p></div>
         <center>
         <button className='btn' onClick={handleClick} >Click me🤗</button>
         </center> 
    </div>
  )
}

export default Home