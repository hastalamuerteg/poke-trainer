import * as S from './styles'
import { DeveloperContacts } from '../DeveloperContacts'
import pokemonLogo from '../../assets/logo-pokemon.png'

export const Header = () => {
  return (
    <div className="wrapper">
      <S.Container>
        <img
          src={pokemonLogo}
          alt="Logomarca Pokemon, Palavra Pokemon escrita em amarelo com bordas azuis"
        />
        <DeveloperContacts />
      </S.Container>
    </div>
  )
}
