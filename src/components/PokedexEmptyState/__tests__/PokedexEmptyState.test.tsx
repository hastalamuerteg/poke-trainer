import { render, screen } from '@testing-library/react'
import { PokedexEmptyState } from '..'

describe('PokedexEmptyState component', () => {
  it('should render PokedexEmptyState properly', () => {
    render(<PokedexEmptyState />)

    const title = screen.getByText(/Your Pokedex is still empty/i)
    expect(title).toBeInTheDocument()
  })
})
