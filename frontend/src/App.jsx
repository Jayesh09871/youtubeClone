import React from 'react'
import CategoryBar from './components/CategoryBar'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import './App.css';
import Signin from './components/SignInForm';
export default function App() {
  return (
    <div className="appContainer">
      <Sidebar/>
      <div className="contentContainer">
      <Navbar/>
      <CategoryBar/>
      
    
    </div>
    </div>
    
  )
}
