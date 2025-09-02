import React from 'react'
import TopNavbar from '../components/TopNavbar'
import { Upload,Trophy,UserCheck } from "lucide-react";
import Skill from '../components/Skill';

const Dashboard = () => {
  return (
    <div className="bg-[#f7f9fc] min-h-screen pt-30">
      <TopNavbar/>
    <div className=' flex  justify-evenly'>
      
      <div className=" w-[30%] h-25 rounded-3xl bg-[#ffffff] flex justify-center items-center gap-3">
         <div className="h-15 w-15 bg-[#7c3aed] rounded-2xl  flex justify-center items-center ">
                <Upload size={30}  color='white'/>
           </div>
          <div className=" w-[70%] h-[80%]  flex flex-col mt-3 ">
              <p className="text-xl text-[#98A0b3] ">Total Resumes Uploaded</p>
              <p className='text-2xl font-semibold'>1,248</p>
          </div>
      </div>

      <div className=" w-[30%] h-25 rounded-3xl bg-[#ffffff] flex justify-center items-center gap-3">
          <div className="h-15 w-15 bg-[#7c3aed] rounded-2xl  flex justify-center items-center ">
              <Trophy size={30}  color='white'/>
          </div>
          <div className=" w-[70%] h-[80%]  flex flex-col mt-3 ">
            <p className="text-xl text-[#98A0b3] ">Top Ranked Resumes</p>
            <p className='text-2xl font-semibold'>87</p>
          </div>
      </div>

      <div className=" w-[30%] h-25 rounded-3xl bg-[#ffffff] flex justify-center items-center gap-3">
          <div className="h-15 w-15 bg-[#7c3aed] rounded-2xl  flex justify-center items-center ">
              <UserCheck size={30}  color='white'/>
          </div>
          <div className=" w-[70%] h-[80%]  flex flex-col mt-3 ">
            <p className="text-xl text-[#98A0b3] ">Shortlisted Candidates</p>
            <p className='text-2xl font-semibold'>56</p>
          </div>
      </div>
    </div>

     <Skill/> 

    </div>
  )
}

export default Dashboard
