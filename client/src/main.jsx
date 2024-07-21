import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import './index.css'

import Layout from './pages/Layout.jsx'
import Home from './pages/Home.jsx'
import Dashboard from './pages/Dashboard.jsx'
import SignIn from './pages/SignIn.jsx'
import SignUp from './pages/SignUp.jsx'
import About from './pages/About.jsx'
import Projects from './pages/Projects.jsx'

let router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={ <Layout /> }>
      <Route path='' element={ <Home /> } />
      <Route path='dashboard' element={ <Dashboard /> } />
      <Route path='sign-in' element={ <SignIn /> } />
      <Route path='sign-up' element={ <SignUp /> } />
      <Route path='about' element={ <About /> } />
      <Route path='projects' element={ <Projects /> } />
    </Route>
  )
)

ReactDOM.createRoot( document.getElementById( 'root' ) ).render(
  <React.StrictMode>
    <RouterProvider router={ router } />
  </React.StrictMode>,
)
