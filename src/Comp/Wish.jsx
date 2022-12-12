import React from 'react'
import { useNavigate } from 'react-router-dom'
const Wish = () => {
  const navigate=useNavigate();
  const navig=useNavigate();
  const handClick=()=>{
    navigate("/Quotes")
  }
  const handClicks=()=>{
    navig("/Final")
  }
  return (
    <>
    <div className='ba'>
      <button className='btn1' onClick={handClick}>Back</button>
      <button className='btn2' onClick={handClicks}>Next</button>
    </div>
    <div className='wish'>
      ❤SHALINI❤
    </div>
    <h3>☺🕺ROCK THIS DAY PANDA☺🕺</h3>
    </>
  )
}

export default Wish