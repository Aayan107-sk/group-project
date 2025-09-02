import React from 'react'
import Logo from './logo'

const Navbar = () => {
  return (
    <div className='h-screen  fixed top-0 left-0 right-0 w-[15%] bg-[#F1F4F9]' >
      <div className="h-28 bg-red-500 flex">
        <Logo color="blue" size={20} />
        <h1>AI Resume Analyzer</h1></div>
      

      
    </div>
  )
}

export default Navbar
