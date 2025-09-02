import React from 'react'

const Login = () => {
  return (
    <>
      <div className='min-h-screen flex items-center justify-center bg-gray-50'>
        <div className='max-w-4xl w-full bg-white rounded-2xl shadow-md grid grid-cols-1 md:grid-cols-2 gap-6 px-6 py-8'>

          <div className='flex flex-col justify-center'>
            <div className='flex items-center space-x-3 mb-8'>
              <div className='bg-indigo-500 text-white p-3 rounded-xl'>
                <span className='material-icon'>smart_toy</span>
              </div>
              <div>
                <h1 className='text-lg font-semibold'>AI Resume Analyzer</h1>
                <p className='text-sm text-gray-500'>Smart Hiring with AI</p>
              </div>
            </div>
            <h1 className='text-2xl font'>Welcome back</h1>
          </div>

        </div>

      </div>



    </>
  )
}

export default Login
