import { useEffect, useState } from 'react'
import {
  PokedexOpenAtom,
  PokemonsInPokedexAtom,
  addNewPokemonInPokedexAtom,
  pokedexLengthLimitAtom,
} from '../../atomStore'
import { CloseIcon, DeleteIcon, PlusIcon } from '../../lib'
import { Pokemon } from '../../types'
import { PokedexEmptyState } from '../PokedexEmptyState'
import * as S from './styles'
import { useSetAtom, useAtomValue } from 'jotai'
import { toast } from 'react-hot-toast'

type PokedexState = 'idle' | 'empty' | 'add_pokemon' | 'list'

export const Pokedex = () => {
  const [stateMachine, setStateMachine] = useState<PokedexState>('idle')
  const setPokedexOpen = useSetAtom(PokedexOpenAtom)
  const pokemonsInPokedex = useAtomValue(PokemonsInPokedexAtom)
  const setPokemonsInPokedex = useSetAtom(PokemonsInPokedexAtom)
  const addNewPokemonInPokedex = useAtomValue(addNewPokemonInPokedexAtom)
  const pokedexLengthLimit = useAtomValue(pokedexLengthLimitAtom)
  const setAddNewPokemonInPokedex = useSetAtom(addNewPokemonInPokedexAtom)

  const handleCloseMyPokedex = (e: any) => {
    e.stopPropagation()
    setPokedexOpen(false)
  }

  const handleDeletePokemonFromPokedex = (pokemon: Pokemon) => {
    const newPokemonsInPokedex = pokemonsInPokedex.filter(
      (p) => p.id !== pokemon.id,
    )
    setPokemonsInPokedex(newPokemonsInPokedex)
  }

  useEffect(() => {
    if (!pokemonsInPokedex.length) setStateMachine('empty')
    else setStateMachine('list')
  }, [pokemonsInPokedex, addNewPokemonInPokedex])

  useEffect(() => {
    if (addNewPokemonInPokedex) setStateMachine('add_pokemon')
  }, [addNewPokemonInPokedex])

  const handleAddPokemonIntoPokedex = () => {
    if (pokemonsInPokedex.length === pokedexLengthLimit) {
      setAddNewPokemonInPokedex(undefined)
      return toast.error(
        'Sua Pokedex está cheia. Você pode adicionar no máximo 6 Pokemons',
      )
    }
    if (addNewPokemonInPokedex) {
      const isPokemonAlreadyInList = pokemonsInPokedex.find(
        (p) => p.id === addNewPokemonInPokedex.id,
      )
      if (isPokemonAlreadyInList) {
        setAddNewPokemonInPokedex(undefined)
        return toast.error(
          `${addNewPokemonInPokedex.name} já está em sua Pokedex`,
        )
      }
      setPokemonsInPokedex([...pokemonsInPokedex, addNewPokemonInPokedex])
    }
  }

  const stateMachineStates = {
    states: {
      idle: '',
      empty: <PokedexEmptyState />,
      add_pokemon: (
        <S.AddNewPokemonContainer>
          <S.ConfirmAddNewPokemonTitle>
            Add {addNewPokemonInPokedex?.name} to your Pokedex?
          </S.ConfirmAddNewPokemonTitle>
          <S.ConfirmAddNewPokemonButton onClick={handleAddPokemonIntoPokedex}>
            Add
            <PlusIcon />
          </S.ConfirmAddNewPokemonButton>
          <S.ConfirmAddNewPokemonImg>
            <img
              src={addNewPokemonInPokedex?.img}
              alt={addNewPokemonInPokedex?.name}
            />
          </S.ConfirmAddNewPokemonImg>
        </S.AddNewPokemonContainer>
      ),
      list: (
        <>
          <S.PokedexTitle>Pokemons</S.PokedexTitle>
          <S.PokedexContent>
            {pokemonsInPokedex?.map((p) => (
              <S.PokedexPokemonCard key={p.id}>
                <S.PokedexDeletePokemonButton
                  onClick={() => handleDeletePokemonFromPokedex(p)}
                >
                  <DeleteIcon />
                </S.PokedexDeletePokemonButton>
                <img src={p.img} alt={p.name} />
              </S.PokedexPokemonCard>
            ))}
          </S.PokedexContent>
        </>
      ),
    },
  }

  return (
    <S.PokedexContainer onClick={handleCloseMyPokedex}>
      <S.Pokedex onClick={(e) => e.stopPropagation()}>
        <S.PokedexHeader>
          <S.CloseButton onClick={handleCloseMyPokedex}>
            <CloseIcon />
          </S.CloseButton>
          <S.HeaderBallEye />
          <S.HeaderTripleDots>
            <span></span>
            <span></span>
            <span></span>
          </S.HeaderTripleDots>
        </S.PokedexHeader>
        <S.PokedexBody>{stateMachineStates.states[stateMachine]}</S.PokedexBody>
      </S.Pokedex>
    </S.PokedexContainer>
  )
}
