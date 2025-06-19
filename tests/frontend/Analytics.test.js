import React from 'react'
import { render, screen } from '@testing-library/react'
import Analytics from '../../src/components/pages/Analytics'

describe('Analytics Component', () => {
    it('displays loading state initially', () => {
        render(<Analytics />)
        expect(screen.getByText('Loading...')).toBeInTheDocument()
    })

    it('displays stats after loading', async () => {
        jest.spyOn(global, 'fetch').mockImplementation(() =>
            Promise.resolve({
                json: () => Promise.resolve({
                    totalQueries: 42,
                    successfulResponses: 40,
                    avgResponseTime: 1200
                })
            })
        )

        render(<Analytics />)
        expect(await screen.findByText('Total Queries: 42')).toBeInTheDocument()
        global.fetch.mockRestore()
    })
})