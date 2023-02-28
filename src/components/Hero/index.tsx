import { Header } from '../Header'
import * as S from './styles'
import trainer from '../../assets/ash-trainer.png'
import { ArrowRightIcon } from '../../lib'
import { useSetAtom } from 'jotai'
import { PokedexOpenAtom } from '../../atomStore'

export const Hero = () => {
  const setPokedexOpen = useSetAtom(PokedexOpenAtom)

  const handleCheckMyPokedex = () => {
    setPokedexOpen(true)
  }

  return (
    <S.Container>
      <Header />
      <div className="wrapper">
        <S.Content>
          <S.ContentLeftContainer>
            <S.ContentLeftContainerTitle>
              Poke Trainer
            </S.ContentLeftContainerTitle>
            <S.ContentLeftContainerDescription>
              On Poke Trainer you can add pokemons to your Pokedex and switch
              them by getting a new pokemon from the list
            </S.ContentLeftContainerDescription>
            <S.CheckMyPokemonsButton onClick={handleCheckMyPokedex}>
              Go to my Pokedex <ArrowRightIcon />
            </S.CheckMyPokemonsButton>
          </S.ContentLeftContainer>

          <S.ContentRightContainer>
            <img
              src={trainer}
              alt="Imagem do Ash (personagem do pokemon), apontando para a frente com uma pokebola na mão, um pouco acima dele estão os pokemons, bulbasauro,
            squirtle e charizard respectivamente"
            />
          </S.ContentRightContainer>
        </S.Content>
      </div>
    </S.Container>
  )
}
