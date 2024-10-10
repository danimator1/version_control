import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Dashboard from './Dashboard'
import Login from './Login'

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/" element={<Login />} />
            </Routes>
        </Router>
    )
}

export default App
