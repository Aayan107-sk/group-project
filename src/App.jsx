
import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Login  from './pages/Login'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from './pages/Dashboard';
import Layout from './components/Layout';
import ResumesPage from './pages/ResumeList';
import CandidateDetail from './pages/CandidatesPage';
import ResumeSearch from './pages/ResumeSearch';
import Notifications from './pages/NotificationsPage';

const App = () => {
  const [login,setLogin]=useState(true);
  return (
    <div>
  {login?
    <Layout>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/resumelist" element={<ResumesPage/>}/>
        <Route path="/candidatedetail" element={<CandidateDetail/>}/>
        <Route path="/resumesearch" element={<ResumeSearch/>}/>
        <Route path="/notificationspage" element={<Notifications/>}/>
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
