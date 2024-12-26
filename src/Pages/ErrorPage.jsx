import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useNavigate, useRouteError } from 'react-router-dom';

const ErrorPage = () => {
      const error=useRouteError()
      const navigate=useNavigate()
      
      return (
            <div className='flex flex-col justify-center items-center min-h-screen gap-3 bg-black '>
                  <Helmet>
                  <title>Error Page</title>
                  </Helmet>
                  <h1 className='text-5xl text-white'>Ooops!!!</h1>
                  <p className='text-white'>Sorry, an unexpected error has occurred.</p>
                 <p className='text-white'>
                    <i>{error.statusText || error.message} </i>
                </p>
                <button onClick={()=>navigate('/')} className="flex items-center gap-2 py-3 px-6 bg-[#e20934] text-white rounded-lg font-semibold transition duration-500 ease-in-out relative overflow-hidden group">
                  <span className="absolute inset-0 bg-gradient-to-r from-[#e20934] to-black opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>
                  <span className="relative group-hover:text-white transition duration-500 ease-in-out">
                    Go Back
                    
                  </span>
                  
                </button>
            </div>
      );
};

export default ErrorPage;