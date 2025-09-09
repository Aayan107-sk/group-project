
import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Login  from './pages/Login'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from './pages/Dashboard';
import Layout from './components/Layout';
import ResumesPage from './pages/ResumeList';
import Shortlist from './pages/Shortlist';
import Notifications from './pages/NotificationsPage';
import CandidateSearch from './pages/SearchCandidate';
import CandidateResult from './pages/CandidateResult';
import AdminSettings from './pages/AdminSettings';
import ResumeDetails from './pages/ResumeDetail';
import UploadResumePage from './pages/UploadResumePage';


const App = () => {
  const [login,setLogin]=useState(true);
  return (
    <div>
  {login?
    <Layout>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/resumelist" element={<ResumesPage/>}/>
        <Route path="/resumeDetails" element={<ResumeDetails/>}/>
        <Route path="/shortlist" element={<Shortlist/>}/> 
        <Route path="/adminsettings" element={<AdminSettings/>}/>
        <Route path="/candidateSearch" element={<CandidateSearch/>}/>
        <Route path="/notificationspage" element={<Notifications/>}/>
        <Route path="/UploadResumePage" element={<UploadResumePage/>}/>
        <Route path="/candidateResult" element={<CandidateResult/>}/>


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
