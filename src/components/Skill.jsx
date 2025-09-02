import React from 'react'

const Skill = () => {
  return (
    <div className="flex gap-1">
    <div className='w-[50%] h-100 bg-[#FFFFFF] rounded-3xl ml-8 mt-10 border-1 border-gray-200 '>  
      <h2 className="text-xl font-bold mt-4 ml-4  ">Skill Distribution</h2>
      <p className="mt-2 ml-4 text-[#98A0b3]">Breakdown of key skills across uploaded resumes</p>
      <div className="h-[70%] w-[90%] mt-4 ml-8 rounded-2xl border-1 border-gray-200 flex justify-center items-center ">
        
          <img className="w-[95%] h-[95%] rounded-2xl" src="/public/Distribution.png" alt="" />
       
      </div>
   </div>
     <div className='w-[42%] h-100 bg-[#FFFFFF] rounded-3xl ml-8 mt-10 border-1 border-gray-200'>  
   </div>
   </div>
  )
}

export default Skill
