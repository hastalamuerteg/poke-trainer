import * as S from './styles'
import pikachu from '../../assets/pikachu.png'
import { WarningCircleIcon } from '../../lib'

export const PokedexEmptyState = () => {
  return (
    <S.EmptyStateContainer>
      <img src={pikachu} alt="pikachu" />
      <S.EmptyStateMessage>
        Your Pokedex is still empty. <br />
        Click the + icon in the pokeball to add Pokemons
      </S.EmptyStateMessage>
      <S.EmptyStateAlertMessage>
        <WarningCircleIcon />
        You can only add 6 Pokemons to your Pokedex
      </S.EmptyStateAlertMessage>
    </S.EmptyStateContainer>
  )
}
