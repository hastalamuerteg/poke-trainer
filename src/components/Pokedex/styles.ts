import styled, { keyframes } from 'styled-components'

const fadeFromRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(20px);
  }
  to {
    opacity: 1;
    transform: translateX(0px);
  }
`

export const PokedexContainer = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 3;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Pokedex = styled.div`
  height: 100%;
  width: 31.25rem;
  background: var(--red);
  position: absolute;
  right: 0;
  z-index: 9999;
  box-shadow: 0 0 1.5rem rgba(0, 0, 0, 0.756);
  border-top-left-radius: 2rem;
  border-bottom-left-radius: 2rem;

  @media (max-width: 31.25rem) {
    width: 100%;
  }

  animation: ${fadeFromRight} 0.3s;
`
export const PokedexHeader = styled.div`
  height: 8rem;
  width: 36rem;
  border-bottom: 0.5rem solid rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: start;
  align-items: center;
  position: relative;
`
export const HeaderBallEye = styled.div`
  display: block;
  background: rgb(117, 168, 242);
  background: radial-gradient(
    circle,
    rgba(117, 168, 242, 1) 0%,
    rgba(0, 82, 200, 1) 100%
  );
  height: 5rem;
  width: 5rem;
  margin: 0 2rem;
  border-radius: 999px;
  border: 3px solid var(--white);
`
export const HeaderTripleDots = styled.div`
  display: flex;
  justify-content: start;
  align-items: start;
  padding-bottom: 4rem;

  span {
    height: 1.3rem;
    width: 1.3rem;
    border-radius: 999px;
    margin-left: 0.5rem;
    border: 1px solid var(--black);
    box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.256);

    &:nth-child(1) {
      background: #ff3424;
    }

    &:nth-child(2) {
      background: #ffe711;
    }

    &:nth-child(3) {
      background: #33ea1c;
    }
  }
`

export const PokedexBody = styled.div`
  height: 70%;

  width: 90%;
  margin: 1rem auto;
  border-radius: 2rem;
  padding: 2rem;
`

export const PokedexTitle = styled.span`
  font-size: 2rem;
  font-weight: 700;
  text-transform: capitalize;
  text-align: center;
  display: block;
  color: var(--white);
`

export const PokedexContent = styled.span`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-items: center;
`

export const PokedexPokemonCard = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(255, 255, 255, 0.6);
  height: 6.5rem;
  width: 6.5rem;
  margin: 1rem;
  border-radius: 2rem;
  position: relative;

  img {
    height: 6rem;
  }
`
export const PokedexDeletePokemonButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  height: 2rem;
  width: 2rem;
  border-radius: 999px;
  background: var(--white);
  color: var(--primary);
  top: -0.7rem;
  left: 0;
  border: 3px solid var(--primary-hover);

  svg {
    height: 1.3rem;
    width: 1.3rem;
  }
`

export const CloseButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 3rem;
  width: 3rem;
  font-size: 1rem;
  font-weight: 700;
  color: var(--white);
  background: var(--primary-hover);
  border-radius: 999px;
  position: absolute;
  top: 1rem;
  right: 5rem;
  z-index: 3;

  svg {
    width: 1.3rem;
    height: 1.3rem;
  }

  @media (max-width: 31.25rem) {
    right: 12rem;
  }
`

export const AddNewPokemonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

export const ConfirmAddNewPokemonTitle = styled.p`
  width: 100%;
  font-size: 1rem;
  font-weight: 700;
  color: var(--white);
  margin: 1.5rem 0;
  text-align: center;
`

export const ConfirmAddNewPokemonButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 3rem;
  background: var(--white);
  border-radius: 999px;
  font-size: 1rem;
  font-weight: 700;
  color: var(--primary);

  svg {
    width: 1.3rem;
    height: 1.3rem;
    margin-left: 1rem;
  }
`

export const ConfirmAddNewPokemonImg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 17rem;
  width: 17rem;
  border-radius: 999px;
  margin: 2rem 0;
  background: rgba(255, 255, 255, 0.6);

  img {
    height: 15rem;
  }
`
