import { render, screen } from '@testing-library/react'
import { SearchPokemonErrorState } from '..'

describe('SearchPokemonErrorState component', () => {
  it('should render SearchPokemonErrorState properly', () => {
    render(<SearchPokemonErrorState />)

    const title = screen.getByText(/We could not find the requested pokemon/i)
    expect(title).toBeInTheDocument()
  })

  it('should load SearchPokemonErrorState image properly', () => {
    render(<SearchPokemonErrorState />)

    const img = screen.getByAltText(/image do pokemon Psyduck triste/i)
    expect(img).toBeInTheDocument()
  })
})
