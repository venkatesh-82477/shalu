import React from 'react'
import { useNavigate } from 'react-router-dom'
const Quotes = () => {
    const navi=useNavigate();
    const nav=useNavigate();
  const clickHandle=()=>{
    navi("/")
  }
  const clickHandler=()=>{
    nav("/Wish")
  }
  const notHear=()=>{
    alert("Don't click me,please click on top Next button")
  }
  return (
    <div className='qu'>
      <div className='ba'>
        <button className='btn1' onClick={clickHandle}>Back</button>
        <button className='btn2' onClick={clickHandler}>Next</button>
      </div>
      <div className='t1'>Hello Panda,I am so honored to call you my best friend. You deserve every good thing that comes to you on your birthday and beyond.</div>
      <div className='t2'>Another year comes to a close, and another begins. May the coming year be one that will be filled with laughter of friends, love of family, and the life that you dream of.</div>
      <div className='t3'>You live your life in a way that makes every day worth celebrating.I'm so happy that the universe brought us together and we became best friends.</div>
      <div className='t4'>Happy birthday to the girl who always has my back and is always there to pick me up when times get tough.So,Thank you so much <b style={{color:"red"}}>SHALINI</b></div>
     <div className='t5' onClick={notHear}>Click the button to go to next</div>
    </div>
  )
}

export default Quotes