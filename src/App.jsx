
import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Login  from './pages/Login'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from './pages/Dashboard';
import Layout from './components/Layout';
import ResumeList from './pages/ResumeList';
import ResumesPage from './pages/ResumeList';

const App = () => {
  const [login,setLogin]=useState(false);
  return (
    <div>
  {login?
    <Layout>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/resumelist" element={<ResumesPage/>}/>
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
