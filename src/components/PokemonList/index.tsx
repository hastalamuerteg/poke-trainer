import { useCallback, useEffect, useState } from 'react'
import { PokemonCard } from '../PokemonCard'
import * as S from './styles'
import { SearchBar } from '../SearchBar'
import { SearchPokemonErrorState } from '../SearchPokemonErrorState'
import { Loading } from '../Loading'
import { pokemonListAtom } from '../../atomStore'
import { useAtomValue } from 'jotai'
import { useFetchPokemonData } from '../../hooks/useFetchPokemonData'

type StateMachine = 'idle' | 'loading' | 'error' | 'ready'

export const PokemonList = () => {
  const [stateMachine, setStateMachine] = useState<StateMachine>('idle')
  const pokemonList = useAtomValue(pokemonListAtom)
  const [page, setPage] = useState(1)

  const { getList, getOnePokemon } = useFetchPokemonData()

  const fetchPokemonList = useCallback(async () => {
    setStateMachine('loading')
    const response = await getList(page)
    if (!response?.success) {
      setStateMachine('error')
    }

    if (response?.success) {
      setStateMachine('ready')
    }
  }, [page])

  const fetchPokemon = async (pokemon: string) => {
    setStateMachine('loading')
    const response = await getOnePokemon(pokemon)

    if (!response?.success) {
      setStateMachine('error')
    }

    if (response?.success) {
      setStateMachine('ready')
    }
  }

  const handleSearch = async (pokemonSearch: string) => {
    await fetchPokemon(pokemonSearch)
  }

  useEffect(() => {
    fetchPokemonList()
  }, [page, fetchPokemonList])

  const handleLoadMorePokemons = () => {
    setPage(page + 1)
  }

  const stateMachineStates = {
    states: {
      idle: null,
      loading: <Loading />,
      error: <SearchPokemonErrorState />,
      ready: (
        <>
          <S.PokemonList>
            {pokemonList?.map((p) => (
              <PokemonCard pokemon={p} key={p.id} />
            ))}
          </S.PokemonList>
          <S.LoadMorePokemonButtonContainer onClick={handleLoadMorePokemons}>
            <S.LoadMorePokemonButton>Load more</S.LoadMorePokemonButton>
          </S.LoadMorePokemonButtonContainer>
        </>
      ),
    },
  }

  return (
    <>
      <S.SearchBarContainer>
        <SearchBar onSearch={handleSearch} onResetList={fetchPokemonList} />
      </S.SearchBarContainer>
      {stateMachineStates.states[stateMachine]}
    </>
  )
}
