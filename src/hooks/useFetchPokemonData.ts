import { useSetAtom } from 'jotai'
import { pokemonListAtom } from '../atomStore'
import { getPokemon, getPokemonList } from '../services/base'
import { Pokemon } from '../types'
import { pokemonTypes } from '../utils'

export const useFetchPokemonData = () => {
  const setPokemonList = useSetAtom(pokemonListAtom)

  const augmentPokemonObj = (response: Pokemon) => {
    return {
      id: response.id,
      name: response.name,
      types: response.types.map((t) => {
        return {
          type: {
            name: t.type.name,
            icon: pokemonTypes.find((i) => i.name === t.type.name)?.icon ?? '',
          },
        }
      }),
      weight: response.weight,
      height: response.height,
      img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${response.id}.png`,
    }
  }

  const augmentPokemonGeneralList = async (pokemonList: Pokemon[]) => {
    const fetchedPokemonsList: Pokemon[] = []
    for (const pokemon of pokemonList) {
      try {
        const response = await getPokemon(pokemon.name)
        const pokemonObj = augmentPokemonObj(response.data)
        fetchedPokemonsList.push(pokemonObj)
      } catch (error) {
        console.log(error)
      }
    }
    return fetchedPokemonsList
  }

  const getList = async (page: number) => {
    try {
      const response = await getPokemonList(page)
      if (response?.data) {
        const augmentedPokemonList = await augmentPokemonGeneralList(
          response.data.results,
        )
        setPokemonList((prevState) => {
          if (prevState && page > 1)
            return [...prevState, ...augmentedPokemonList]
          return augmentedPokemonList
        })
      }
      return response
    } catch (error) {
      console.log(error)
    }
  }

  const getOnePokemon = async (pokemon: string) => {
    try {
      const response = await getPokemon(pokemon)
      if (response?.data) {
        const pokemonAugmentedObj = augmentPokemonObj(response.data)
        setPokemonList([pokemonAugmentedObj])
      }
      return response
    } catch (error) {
      console.log(error)
    }
  }

  return {
    getList,
    getOnePokemon,
  }
}
