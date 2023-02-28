import * as S from './styles'
import { LinkedinLogo, GithubLogo, GlobeIcon } from '../../lib'

export const DeveloperContacts = () => {
  return (
    <S.Container>
      <li>
        <S.Link href="https://www.linkedin.com/in/gabriel--vicente/">
          <LinkedinLogo />
        </S.Link>
      </li>
      <li>
        <S.Link href="https://github.com/hastalamuerteg">
          <GithubLogo />
        </S.Link>
      </li>
      <li>
        <S.Link href="https://gabriel-vicente-dev.vercel.app/">
          <GlobeIcon />
        </S.Link>
      </li>
    </S.Container>
  )
}
