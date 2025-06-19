import React, { useState } from 'react'
import axios from 'axios'

const Chat = () => {
    const [question, setQuestion] = useState('')
    const [response, setResponse] = useState(null)
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (!question.trim()) {
            setError('Please enter a question')
            return
        }

        setLoading(true)
        setError('')

        try {
            const result = await axios.post('/api/chat', { question })
            setResponse(result.data)
        } catch (err) {
            setError('Failed to get response. Please try again.')
            console.error(err)
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="chat-container">
            <form onSubmit={handleSubmit}>
                <textarea
                    id="question-input"
                    value={question}
                    onChange={(e) => setQuestion(e.target.value)}
                    placeholder="Ask your question..."
                />
                <button id="submit-btn" type="submit" disabled={loading}>
                    {loading ? 'Processing...' : 'Submit'}
                </button>
                {error && <p id="error-message" className="error">{error}</p>}
            </form>

            {response && (
                <div id="response-area" className="response">
                    <h3>Response:</h3>
                    <p>{response.answer}</p>
                    {response.sources && (
                        <div className="sources">
                            <h4>Sources:</h4>
                            <ul>
                                {response.sources.map((source, index) => (
                                    <li key={index}>{source}</li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
            )}
        </div>
    )
}

export default Chat