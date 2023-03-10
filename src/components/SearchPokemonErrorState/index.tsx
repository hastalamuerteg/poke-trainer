import * as S from './styles'
import sadPokemon from '../../assets/sad.png'

export const SearchPokemonErrorState = () => {
  return (
    <S.Container>
      <img
        src={sadPokemon}
        alt="image do pokemon Psyduck triste com as patas na cabeça em sinal de preocupação."
      />
      <S.EmptyStateMessage>
        We could not find the requested pokemon. <br />
        Try again.
      </S.EmptyStateMessage>
    </S.Container>
  )
}
