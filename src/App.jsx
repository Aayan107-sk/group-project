
import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Login  from './pages/Login'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from './pages/Dashboard';
import Layout from './components/Layout';
import ResumeList from './pages/ResumeList';
import ResumesPage from './pages/ResumeList';
import Shortlist from './pages/Shortlist';

const App = () => {
  const [login,setLogin]=useState(true);
  return (
    <div>
  {login?
    <Layout>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/resumelist" element={<ResumesPage/>}/>
        <Route path="/shortlist" element={<Shortlist/>}/>
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
