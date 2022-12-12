import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Home from '../Comp/Home'
import Quotes from '../Comp/Quotes'
import Wish from '../Comp/Wish'
import Error from '../Comp/Error'
import Final from '../Comp/Final'
const Ro = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Quotes' element={<Quotes/>}/>
        <Route path='/Wish' element={<Wish/>}/>
        <Route path='/Final' element={<Final/>}/>
        <Route path='*' element={<Error/>}/>
      </Routes>
    </>
  )
}

export default Ro