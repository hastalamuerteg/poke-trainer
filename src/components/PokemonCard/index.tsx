import { Pokemon } from '../../types'
import * as S from './styles'
import { BarbellIcon, GoBackIcon, PlusIcon, RulerIcon } from '../../lib'
import { PokedexOpenAtom, addNewPokemonInPokedexAtom } from '../../atomStore'
import { useSetAtom } from 'jotai'
import { useEffect, useState } from 'react'

interface IPokemonCardProps {
  pokemon: Pokemon
}

type PokemonCardState = 'idle' | 'default' | 'more_details'

export const PokemonCard = ({ pokemon }: IPokemonCardProps) => {
  const [stateMachine, setStateMachine] = useState<PokemonCardState>('idle')
  const setPokedexOpen = useSetAtom(PokedexOpenAtom)
  const setAddNewPokemonInPokedex = useSetAtom(addNewPokemonInPokedexAtom)

  const handleCheckMyPokedex = (pokemon: Pokemon) => {
    setPokedexOpen(true)
    setStateMachine('default')
    setAddNewPokemonInPokedex(pokemon)
  }

  const handleCheckMoreDetails = () => {
    setStateMachine('more_details')
  }

  const handleGoBackToPokeball = () => {
    setStateMachine('default')
  }

  useEffect(() => {
    if (pokemon) setStateMachine('default')
  }, [pokemon])

  const stateMachineStates = {
    states: {
      idle: '',
      default: (
        <>
          <S.PokemonName>{pokemon.name}</S.PokemonName>
          <S.ContainerStrap>
            <S.AddPokemonButton onClick={() => handleCheckMyPokedex(pokemon)}>
              <PlusIcon />
            </S.AddPokemonButton>
          </S.ContainerStrap>
          <S.MoreDetailsButton onClick={handleCheckMoreDetails}>
            More details
          </S.MoreDetailsButton>
        </>
      ),
      more_details: (
        <S.MoreDetailsContainer>
          <S.MoreDetailsGoBackButton onClick={handleGoBackToPokeball}>
            <GoBackIcon />
          </S.MoreDetailsGoBackButton>
          <S.MoreDetailsTitle>Stats</S.MoreDetailsTitle>
          <S.MoreDetailsStatsLabel>
            <RulerIcon /> Height {pokemon?.height / 10} m
          </S.MoreDetailsStatsLabel>
          <S.MoreDetailsStatsLabel>
            <BarbellIcon /> Weight {pokemon?.weight / 10} kg
          </S.MoreDetailsStatsLabel>
          <S.MoreDetailsTypesTitle>Type:</S.MoreDetailsTypesTitle>
          <S.MoreDetailsTypes>
            {pokemon?.types.map((t) => (
              <S.MoreDetailsTypesIconBox key={`${pokemon.id}-${t.type.name}`}>
                <img src={t.type.icon} alt={t.type.name} />
                <S.MoreDetailsTypesName>{t.type.name}</S.MoreDetailsTypesName>
              </S.MoreDetailsTypesIconBox>
            ))}
          </S.MoreDetailsTypes>
        </S.MoreDetailsContainer>
      ),
    },
  }

  return (
    <S.Container>
      <S.PokemonImg>
        <img src={pokemon.img} alt={pokemon.name} />
      </S.PokemonImg>
      {stateMachineStates.states[stateMachine]}
    </S.Container>
  )
}
