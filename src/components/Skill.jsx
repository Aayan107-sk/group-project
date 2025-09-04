import React from 'react'

const Skill = () => {
  return (
    <div className="flex flex-col">
    <div className="flex gap-1">
    <div className='w-[50%] h-100 bg-[#FFFFFF] rounded-3xl ml-8 mt-10 border-1 border-gray-200 '>  
      <h2 className="text-xl font-bold mt-4 ml-4  ">Skill Distribution</h2>
      <p className="mt-2 ml-4 text-[#98A0b3]">Breakdown of key skills across uploaded resumes</p>
      <div className="h-[70%] w-[90%] mt-4 ml-8 rounded-2xl border-1 border-gray-200 flex justify-center items-center ">
        
          <img className="w-[95%] h-[95%] rounded-2xl" src="/Distribution.png" alt="" />
       
      </div>
   </div>
     <div className='w-[42%] h-100 bg-[#FFFFFF] rounded-3xl ml-8 mt-10 border-1 border-gray-200'>  
      <div className="">
        <h2 className="text-xl font-bold mt-4 ml-4  ">Insights</h2>
        <p className="mt-2 ml-4 text-[#98A0b3]">Top insights from recent uploads</p>
      </div>
      <div className="h-[70%] w-[100] mt-4  flex flex-col items-center gap-1">
        <div className="h-20 w-[95%] rounded-2xl   border-1 border-[#98A0B3] bg-[#F1F4F9] flex items-center justify-between">
          <div className="h-18 w-[65%] text-lg ml-4 pt-2">
            <div className="">
              <p>Strong demand in React,<br />Node.js, and Python</p>
            </div>
          </div>
          <div className="h-18 w-[30%]  mr-2 flex items-center justify-center">
              <p className='bg-[#16a34a] h-10 w-[95%] rounded-full text-center pt-2'>Trending</p>
          </div>
        </div>
        <div className="h-20 w-[95%] rounded-2xl  border-1 border-[#98A0B3] bg-[#F1F4F9] flex">
           <div className="h-18 w-[65%] text-lg ml-4 pt-2">
            <div className="">
              <p>Average candidate experience:<br/> 4.2 years</p>
            </div>
          </div>
          <div className="h-18 w-[30%]  mr-2 flex items-center justify-center">
              <p className='bg-[#f5e937] h-10 w-[95%] rounded-full text-center pt-2'>Update</p>
          </div>
        </div>
        <div className="h-20 w-[95%] rounded-2xl   border-1 border-[#98A0B3] bg-[#F1F4F9] flex items-center justify-between">
          <div className="h-18 w-[65%] text-lg ml-4 pt-2">
            <div className="">
              <p>Top universities represented:<br/> MIT, Stanford, CMU</p>
            </div>
          </div>
          <div className="h-18 w-[30%]  mr-2 flex items-center justify-center">
              <p className='bg-[#7c3aed] h-10 w-[95%] rounded-full text-center pt-2'>Insight</p>
          </div>
        </div>
      </div>
    </div>
    </div>

    {/* rank section */}
    <div className="bg-[#FFFFFF] border-1 border-gray-200 h-100 w-auto mx-8 mt-8 rounded-3xl">
      <div className=" mt-4 ml-4 flex flex-col gap-2">
        <h2  className="text-xl font-bold  ">Top Ranked Candidates</h2>
        <p className=" text-[#98A0b3]">Based on AI scoring and relevance</p>
      </div>
      
       <div className="h-[70%] w-[100%] mt-4  flex flex-col items-center gap-4">
        <div className="h-20 w-[95%] rounded-2xl   border-1 border-[#98A0B3] bg-[#F1F4F9] flex items-center justify-between">
          <div className="h-18 w-[85%] text-lg ml-2  flex items-center">
            <div className="flex">
              <img className="bg-red-800 h-10 w-10 rounded-full mt-2" src='/persion.png'/>  
              <div className="ml-2 ">
                <p className='font-medium'>Ava Patel</p>
                <p className='text-[#98A0b3]'>Score 96 • Frontend Engineer</p>
              </div>
            </div>
          </div>
          <div className="h-18 w-[15%]  mr-2 flex items-center justify-center">
              <p className='bg-[#7c3aed] h-12 w-[95%] rounded-2xl text-white text-xl font-semibold text-center pt-2'>View Profile</p>
          </div>
        </div>

         <div className="h-20 w-[95%] rounded-2xl   border-1 border-[#98A0B3] bg-[#F1F4F9] flex items-center justify-between">
          <div className="h-18 w-[85%] text-lg ml-2  flex items-center">
            <div className="flex">
                <img className="bg-red-800 h-10 w-10 rounded-full mt-2" src='/persion.png'/>              
                <div className="ml-2 ">
                <p className='font-medium'>Ava Patel</p>
                <p className='text-[#98A0b3]'>Score 96 • Frontend Engineer</p>
              </div>
            </div>
          </div>
          <div className="h-18 w-[15%]  mr-2 flex items-center justify-center">
              <p className='bg-[#7c3aed] h-12 w-[95%] rounded-2xl text-white text-xl font-semibold text-center pt-2'>View Profile</p>
          </div>
        </div>

         <div className="h-20 w-[95%] rounded-2xl   border-1 border-[#98A0B3] bg-[#F1F4F9] flex items-center justify-between">
          <div className="h-18 w-[85%] text-lg ml-2  flex items-center">
            <div className="flex">
              <img className="bg-red-800 h-10 w-10 rounded-full mt-2" src='/persion.png'/>     
              <div className="ml-2 ">
                <p className='font-medium'>Ava Patel</p>
                <p className='text-[#98A0b3]'>Score 96 • Frontend Engineer</p>
              </div>
            </div>
          </div>
          <div className="h-18 w-[15%]  mr-2 flex items-center justify-center">
              <p className='bg-[#7c3aed] h-12 w-[95%] rounded-2xl text-white text-xl font-semibold text-center pt-2'>View Profile</p>
          </div>
        </div>
      
    </div>
     </div>
   </div>
  )
}

export default Skill
