import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Dashboard = () => {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:5000/dashboard', {
                    headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }, 
                })
                setData(response.data)
            } catch (err) {
                setError(err.message)
            } finally {
                setLoading(false)
            }
        }

        fetchData()
    }, [])

    if (loading) return <div>Loading...</div>
    if (error) return <div>Error: {error}</div>

    return <div>{data ? data.message : 'No data available'}</div>
};

export default Dashboard
