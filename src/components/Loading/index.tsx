import * as S from './styles'

export const Loading = () => {
  return (
    <S.Container>
      <S.Spinner />
      <S.LoadingMessage>Loading...</S.LoadingMessage>
    </S.Container>
  )
}
