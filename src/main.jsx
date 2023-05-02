import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import './assets/css/index.css'
import AuthProvider from './context/AuthProvider'
import Routes from './routes/Routes'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={Routes}/>
    </AuthProvider>
  </React.StrictMode>
)
