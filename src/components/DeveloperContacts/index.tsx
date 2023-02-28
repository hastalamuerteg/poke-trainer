import * as S from './styles'
import { LinkedinLogo, GithubLogo, GlobeIcon } from '../../lib'

export const DeveloperContacts = () => {
  return (
    <S.Container>
      <li>
        <S.Link href="https://www.linkedin.com/in/gabriel--vicente/" aria-label='Developer Linkedin' title="Developer Linkedin" id="Developer Linkedin">
          <LinkedinLogo id="Developer Linkedin" />
        </S.Link>
      </li>
      <li>
        <S.Link href="https://github.com/hastalamuerteg" aria-label='Developer Github' title="Developer Github" id="Developer Github">
          <GithubLogo id="Developer Github" />
        </S.Link>
      </li>
      <li>
        <S.Link href="https://gabriel-vicente-dev.vercel.app/" aria-label='Developer Webiste' title="Developer Webiste" id="Developer Webiste">
          <GlobeIcon id="Developer Webiste" />
        </S.Link>
      </li>
    </S.Container>
  )
}
