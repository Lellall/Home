import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import { AppRouter } from './app/app-router.jsx'
// import About from './About.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <About/> */}
    <AppRouter/>
  </React.StrictMode>,
)
