import React from 'react';
import { FaLock, FaEnvelope, FaArrowRight } from 'react-icons/fa';


const Login = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-50 to-indigo-100 flex items-center justify-center p-6">
      <div className="max-w-6xl bg-white rounded-2xl shadow-lg flex flex-col md:flex-row items-center md:items-start gap-10 p-6 md:p-12">
        {/* Left Side: Login Form */}
        <div className="bg-white rounded-2xl p-8 shadow-md w-full max-w-md">
          {/* Logo & Title */}
          <div className="flex items-center gap-3 mb-8">
            <div className="bg-indigo-500 p-3 rounded-full">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-6 w-6 text-white" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <div>
              <h1 className="text-lg font-semibold">AI Resume Analyzer</h1>
              <p className="text-xs text-gray-400">Smart Hiring with AI</p>
            </div>
          </div>

          {/* Form */}
          <h2 className="text-2xl font-semibold mb-6">Welcome back</h2>
          <form className="flex flex-col gap-5">
            <div className="relative">
              <FaEnvelope className="absolute top-3 left-3 text-gray-400" />
              <input 
                type="email" 
                placeholder="Email address" 
                className="w-full border border-gray-300 rounded-lg py-3 pl-10 pr-4 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            <div className="relative">
              <FaLock className="absolute top-3 left-3 text-gray-400" />
              <input 
                type="password" 
                placeholder="Password" 
                className="w-full border border-gray-300 rounded-lg py-3 pl-10 pr-4 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            <button 
              type="submit" 
              className="bg-indigo-600 text-white py-3 rounded-lg flex items-center justify-center gap-2 text-sm hover:bg-indigo-700 transition"
            >
              Login <FaArrowRight />
            </button>
          </form>
        </div>

        {/* Right Side: Image */}
        <div className="rounded-2xl shadow-lg overflow-hidden w-full max-w-lg flex justify-center">
          <img 
            src="group-project/public/Login.png" 
            alt="Man reading" 
            className="object-cover rounded-2xl max-h-[350px]"
          />
        </div>
      </div>

      {/* Bottom: Signup Link */}
      <div className="absolute bottom-5 w-full text-center text-gray-500 text-sm">
        Don't have an account? <a href="#" className="text-indigo-600 font-semibold hover:underline">Sign up</a>
      </div>
    </div>
  );
};

export default Login;
