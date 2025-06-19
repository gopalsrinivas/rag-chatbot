import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Chat from './components/pages/Chat'
import Analytics from './components/pages/Analytics'
import './App.css'

function App() {
    return (
        <Router>
            <div className="App">
                <header>
                    <h1>Altibbe FAQ Chatbot</h1>
                </header>
                <main>
                    <Routes>
                        <Route path="/" element={<Chat />} />
                        <Route path="/analytics" element={<Analytics />} />
                    </Routes>
                </main>
            </div>
        </Router>
    )
}

export default App