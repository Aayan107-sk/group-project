
import React from 'react'
import Navbar from './components/Navbar'
import Login from './pages/Login'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from './pages/Dashboard';
import Layout from './components/Layout';

const App = () => {
  return (
    <div>
    <Layout>
      <Routes>
        <Route path="/" element={<Dashboard />} />
      </Routes>
    </Layout>
    
    </div>
  )
}

export default App
