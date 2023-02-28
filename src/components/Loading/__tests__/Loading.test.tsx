import { render, screen } from '@testing-library/react'
import { Loading } from '..'

describe('Loading component', () => {
  it('should render Loading properly', () => {
    render(<Loading />)

    const title = screen.getByText(/Loading/i)
    expect(title).toBeInTheDocument()
  })
})
