import React from 'react'
import tq from "./../tq.jpeg"
import { useNavigate } from 'react-router-dom'
const Final = () => {
    const navi=useNavigate();
    const nav=useNavigate();
  const clickHandle=()=>{
    navi("/Wish")
  }
  const clickHandler=()=>{
    nav("/")
  }
  return (
    <>
    <div className='ba'>
        <button className='btn1' onClick={clickHandle}>Back</button>
        <button className='btn2' onClick={clickHandler}>Home</button>
      </div>
      <div className='tq'></div>
      <img src={tq} alt="" className='im'/>
      </>
  )
}

export default Final