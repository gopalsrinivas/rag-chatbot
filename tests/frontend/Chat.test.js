import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import Chat from '../../src/components/pages/Chat'

describe('Chat Component', () => {
    it('shows error for empty question', () => {
        render(<Chat />)
        fireEvent.click(screen.getByText('Submit'))
        expect(screen.getByText('Please enter a question')).toBeInTheDocument()
    })

    it('submits valid questions', () => {
        render(<Chat />)
        fireEvent.change(screen.getByPlaceholderText('Ask your question...'), {
            target: { value: 'What is Altibbe?' }
        })
        fireEvent.click(screen.getByText('Submit'))
    })
})