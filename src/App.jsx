
import React from 'react'
import Navbar from './components/Navbar'
import Login  from './pages/Login'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from './pages/Dashboard';
import Layout from './components/Layout';
import ResumeList from './pages/ResumeList';
import ResumesPage from './pages/ResumeList';

const App = () => {
  return (
    <div>
    <Layout>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/resumelist" element={<ResumesPage/>}/>
      </Routes>
    </Layout>
    
    
    </div>
  )
}

export default App
