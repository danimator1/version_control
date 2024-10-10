import React, { useState } from 'react'
import axios from 'axios'

const Login = () => {
    const [username, setUsername] = useState('')
    const [error, setError] = useState(null)

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const response = await axios.post('http://localhost:5000/login', { username })
            localStorage.setItem('token', response.data.token)
            window.location.href = '/dashboard'; 
        } catch (err) {
            setError(err.message)
        }
    }

    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Enter username"
                    required
                />
                <button type="submit">Login</button>
            </form>
            {error && <div>Error: {error}</div>}
        </div>
    )
}

export default Login
