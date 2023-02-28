import { render, screen } from '@testing-library/react'
import { Hero } from '..'

describe('Hero component', () => {
  it('should render Hero properly', () => {
    render(<Hero />)

    const title = screen.getAllByText(/Poke Trainer/i)
    expect(title[0]).toBeInTheDocument()
  })

  it("should load hero's image properly", () => {
    render(<Hero />)

    const heroImg = screen.getByAltText(/Imagem do Ash/i)
    expect(heroImg).toBeInTheDocument()
  })
})
