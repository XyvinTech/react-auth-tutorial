import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Login from './pages/Login';
import Navbar from './components/Navbar';
import AuthGuard from './guards/AuthGuard';


export default function App() {
  return (
    <>

      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<AuthGuard component={<Home />} />} />
        <Route path="/about" element={<AuthGuard component={<About />} />} />
      </Routes>

    </>
  )
}
