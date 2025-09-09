
import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Login  from './pages/Login'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from './pages/Dashboard';
import Layout from './components/Layout';
import Shortlist from './pages/Shortlist';



import CandidateSearch from './pages/SearchCandidate';
import CandidateResult from './pages/CandidateResult';


const App = () => {
  const [login,setLogin]=useState(true);
  return (
    <div>
  {login?
    <Layout>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/shortlist" element={<Shortlist/>}/> 
        <Route path="/candidateSearch" element={<CandidateSearch/>}/>
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
