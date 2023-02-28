import { atom } from 'jotai'
import { Pokemon } from '../types'

export const PokedexOpenAtom = atom<boolean>(false)
export const PokemonsInPokedexAtom = atom<Pokemon[]>([])
export const addNewPokemonInPokedexAtom = atom<Pokemon | undefined>(undefined)
export const pokemonListAtom = atom<Pokemon[] | undefined>(undefined)
export const pokedexLengthLimitAtom = atom<number>(6)
