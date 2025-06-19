import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Analytics = () => {
    const [stats, setStats] = useState({})
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchStats = async () => {
            try {
                const response = await axios.get('/api/analytics')
                setStats(response.data)
            } catch (error) {
                console.error('Error fetching analytics:', error)
            } finally {
                setLoading(false)
            }
        }
        fetchStats()
    }, [])

    return (
        <div className="analytics-container">
            <h2>Query Analytics</h2>
            {loading ? (
                <p>Loading...</p>
            ) : (
                <div>
                    <p>Total Queries: {stats.totalQueries}</p>
                    <p>Successful Responses: {stats.successfulResponses}</p>
                    <p>Average Response Time: {stats.avgResponseTime}ms</p>
                </div>
            )}
        </div>
    )
}

export default Analytics