
import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Login  from './pages/Login'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Layout from './components/Layout';
import ResumesPage from './pages/ResumeList';

import Notifications from './pages/NotificationsPage';
import ResumeDetails from './pages/ResumeDetail';
import UploadResumePage from './pages/UploadResumePage';
import AdminSettings from './pages/AdminSettings';

const App = () => {
  const [login,setLogin]=useState(true);
  return (
    <div>
  {login?
    <Layout>
      <Routes>
        
        <Route path="/resumelist" element={<ResumesPage/>}/>
        
        
        <Route path="/notificationspage" element={<Notifications/>}/>
        <Route path="/resumedetails" element={<ResumeDetails/>}/>
        <Route path="/adminsetting" element={<AdminSettings/>}/>
        <Route path="/resumepage" element={<UploadResumePage/>}/>

      </Routes>
    </Layout>
    :
     <Routes>
        <Route path="/login" element={<Login />} /> 
      </Routes>
    }
    
    </div>
  )
}

export default App
