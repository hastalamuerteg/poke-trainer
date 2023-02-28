import { render, screen } from '@testing-library/react'
import { SearchBar } from '..'

describe('SearchBar component', () => {
  const onSearchFn = jest.fn()
  const onResetFn = jest.fn()

  it('should render SearchBar properly', () => {
    render(<SearchBar onSearch={onSearchFn} onResetList={onResetFn} />)

    const searchBar = screen.getByPlaceholderText(/Search for Pokemon/i)
    expect(searchBar).toBeInTheDocument()
  })
})
