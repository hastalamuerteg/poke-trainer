import styled from 'styled-components'

export const Wrapper = styled.div`
  margin-bottom: 9rem;
`

export const SearchBarContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 2rem 0;
  height: 10rem;
  position: relative;

  &::after {
    content: '';
    display: block;
    height: 0.1rem;
    width: 80%;
    background: var(--primary);
    position: absolute;
    bottom: 0;
    margin: 0 2rem;
  }
`

export const PokemonList = styled.div`
  margin: 12rem auto 2rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  row-gap: 12rem;
  column-gap: 2rem;
  justify-items: center;

  @media (max-width: 62rem) {
    grid-template-columns: repeat(2, 1fr);

    div:last-child {
      grid-column: 1/ -1;
    }
  }

  @media (max-width: 40.94rem) {
    grid-template-columns: 1fr;
  }

  @media (max-width: 31.25rem) {
    margin-top: 12rem;
  }
`

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;

  svg {
    width: 1.5rem;
    height: 1.5rem;
  }

  button[disabled] {
    opacity: 0.5;
    cursor: wait;
  }
`

export const LoadMorePokemonButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 8rem auto;
`

export const LoadMorePokemonButton = styled.button`
  background: var(--primary);
  border-radius: 999px;
  padding: 2rem 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  font-weight: 700;
  font-size: 1rem;
  color: var(--white);
`
