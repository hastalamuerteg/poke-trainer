import { render, screen } from '@testing-library/react'
import { PokemonCard } from '..'
import userEvent from '@testing-library/user-event'

describe('PokemonCard component', () => {
  const fakePokemon = {
    id: 1,
    name: 'bulbasaur',
    types: [
      {
        type: {
          name: 'grass',
          icon: '/src/assets/typesOfPokemons/grass.svg',
        },
      },
      {
        type: {
          name: 'poison',
          icon: '/src/assets/typesOfPokemons/poison.svg',
        },
      },
    ],
    weight: 69,
    height: 7,
    img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/1.png',
  }

  it('should render PokemonCard properly', () => {
    render(<PokemonCard pokemon={fakePokemon} />)

    const pokemonName = screen.getByText(fakePokemon.name)
    expect(pokemonName).toBeInTheDocument()
  })

  it('should open details view when clicking on "more details" button', async () => {
    render(<PokemonCard pokemon={fakePokemon} />)

    const moreDetails = screen.getByRole('button', { name: /more details/i })

    userEvent.click(moreDetails)

    const stats = await screen.findByText(/Stats/i)
    expect(stats).toBeInTheDocument()
  })

  it('should go back to default view of the pokeball when clicking on go back button in more details view', async () => {
    render(<PokemonCard pokemon={fakePokemon} />)

    const moreDetails = screen.getByRole('button', { name: /more details/i })

    userEvent.click(moreDetails)

    const stats = await screen.findByText(/Stats/i)
    expect(stats).toBeInTheDocument()

    const goBackButton = screen.getByTitle(/Go back button/i)

    userEvent.click(goBackButton)

    const moreDetailsDefaultView = await screen.findByRole('button', {
      name: /more details/i,
    })
    expect(moreDetailsDefaultView).toBeInTheDocument()
  })
})
