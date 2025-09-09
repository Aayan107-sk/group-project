import React from 'react'
import Logo from './logo'
import { LayoutDashboard ,FileText,Search,Star,Bell,Settings} from "lucide-react";
import { useNavigate } from "react-router-dom";


const Navbar = () => {
   const navigate = useNavigate();
  return (
    <div className='h-screen  fixed top-0 left-0 right-0 w-[15%] bg-[#F1F4F9]' >
      <div className="h-16 flex gap-3 mt-4 ml-2 items-center ">
        <div className="h-12 w-[30%] bg-[#6c5ce7] rounded-2xl  flex justify-center items-center">
          <Logo color="white" size={30} />
        </div>
        
        <h1 className='text-xl h-20 mt-4 font-medium pl-1 '>AI Resume Analyzer</h1>
      </div> 


      <div className="mt-10 flex flex-col gap-1 justify-center">
        <div onClick={()=>navigate("/")} className="h-10 w-[90%] ml-2 rounded-2xl flex  items-center gap-2 hover:bg-[#6c5ce7]  hover:text-white">
          <LayoutDashboard className='ml-2 ' size={24}  />
         <p className='text-xl pb-0.5'>Dashboard</p> 
        </div>

         <div onClick={()=>navigate("/resumelist")}  className="h-10 w-[90%] ml-2 rounded-2xl flex  items-center gap-2 hover:bg-[#6c5ce7]  hover:text-white">
          <FileText className='ml-2' size={24} />
         <p className='text-xl pb-0.5'>Resumes</p> 
        </div>
        
         <div onClick={()=>navigate("/resumesearch")} className="h-10 w-[90%] ml-2 rounded-2xl  flex  items-center gap-2 hover:bg-[#6c5ce7]  hover:text-white">
          <Search  className='ml-2' size={24}  />
         <p className='text-xl pb-0.5'>Search</p> 
        </div>
         <div onClick={()=>navigate("/shortlist")} className="h-10 w-[90%] ml-2 rounded-2xl  flex  items-center gap-2 hover:bg-[#6c5ce7]  hover:text-white">
          <Star className='ml-2' size={24}  />
         <p className='text-xl pb-0.5'>Shortlist</p> 
        </div>
         <div onClick={()=>navigate("/notificationspage")}  className="h-10 w-[90%] ml-2 rounded-2xl   flex  items-center gap-2 hover:bg-[#6c5ce7]  hover:text-white">
          <Bell className='ml-2' size={24} />
         <p className='text-xl pb-0.5'>Notifications</p> 
        </div>
         <div className="h-10 w-[90%] ml-2 rounded-2xl  flex  items-center gap-2 hover:bg-[#6c5ce7]  hover:text-white">
          <Settings className='ml-2' size={24}/>
         <p className='text-xl pb-0.5'>Settinngs</p> 
        </div>
      </div>
         
    </div>
  )
}

export default Navbar
