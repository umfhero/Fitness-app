import { render, screen } from '@testing-library/react'
import Message from './components/Message'

describe('Message component', () => {
  test('renders empty bookings message', () => {
    render(<Message />)

    expect(
      screen.getByText(/no bookings yet/i)
    ).toBeInTheDocument()
  })
})