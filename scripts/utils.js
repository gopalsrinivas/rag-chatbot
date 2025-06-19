const axios = require('axios')
const logger = require('./logger')

async function queryChatbot(question) {
    try {
        const response = await axios.post(process.env.N8N_WEBHOOK_URL, {
            question
        })
        return response.data
    } catch (error) {
        logger.error(`Failed to query chatbot: ${error.message}`)
        throw error
    }
}

function validateQuestion(question) {
    if (!question || question.trim().length < 3) {
        throw new Error('Question must be at least 3 characters long')
    }
    return question.trim()
}

module.exports = {
    queryChatbot,
    validateQuestion
}