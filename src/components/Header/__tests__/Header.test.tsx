import { render, screen } from '@testing-library/react'
import { Header } from '..'

describe('Header component', () => {
  it('should render Header properly', () => {
    render(<Header />)

    const pokemonLogo = screen.getByAltText(/Logomarca Pokemon/i)
    expect(pokemonLogo).toBeInTheDocument()
  })
})
