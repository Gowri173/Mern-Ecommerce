import React from 'react'
import { Link } from 'react-router-dom'
import Register from './register'

export default function Navbar() {
    return (
        <div>
            <Link to="/">Home/</Link>
            <Link to="/login">Login/</Link>
            <Link to="/register">Register/</Link>
        </div>
    )
}
