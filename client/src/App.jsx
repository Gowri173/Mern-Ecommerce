import React from 'react'
import Navbar from './components/Navbar'
import Register from './components/register'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element />
        <Route path="/login" element />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  )
}
