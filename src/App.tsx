import { Toaster } from 'react-hot-toast'
import { PokedexOpenAtom } from './atomStore'
import { Hero } from './components/Hero'
import { Pokedex } from './components/Pokedex'
import { PokemonList } from './components/PokemonList'
import { useAtomValue } from 'jotai/react'

export const App = () => {
  const pokedexOpen = useAtomValue(PokedexOpenAtom)

  return (
    <>
      <Toaster />
      <Hero />
      <div className="wrapper">
        <PokemonList />
      </div>
      {pokedexOpen && <Pokedex />}
    </>
  )
}
