import React from 'react'
import { HelpCircle } from "lucide-react";

const TopNavbar = () => {
  return (
    <div className='top-0 fixed h-20 w-[85%]  flex justify-between items-center bg-[#f7f9fc] '>
      <div className="text-[#0f1724] text-3xl font-medium  pl-6">Recruiter Dashboard</div>
      <div className='flex gap-2 text-[#98A0b3] mr-6'>
       <p className='pt-1'> <HelpCircle size={20} /></p>
        <p className=''>Help</p> 
      </div>
    

    </div>
  )
}

export default TopNavbar
