import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { RouterProvider } from 'react-router-dom'
import Route from './Route/Route.jsx'
import AuthProvider from './Provider/AuthProvider.jsx'
import { HelmetProvider } from 'react-helmet-async';
import "aos/dist/aos.css"

import "react-tooltip/dist/react-tooltip.css";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider>
    <AuthProvider>
   <RouterProvider router={Route} />
   </AuthProvider>
    </HelmetProvider>
  </StrictMode>,
)
