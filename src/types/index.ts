type PokemonTypes = {
  type: {
    name: string
    icon: string
  }
}

export interface Pokemon {
  id: number
  name: string
  types: PokemonTypes[]
  weight: number
  height: number
  img: string
}

export interface IPokemonResponse {
  results: Pokemon[]
}
