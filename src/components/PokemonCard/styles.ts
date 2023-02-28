import styled, { keyframes } from 'styled-components'

const fadeDown = keyframes`
  from {
    opacity: 0;
    transform: translate3d(0, -32px, 0);
  }
  to {
    opacity: initial;
    transform: initial;
  }
`

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 0.15rem solid var(--white);
  background: rgb(198, 40, 40);
  background: radial-gradient(
    circle,
    rgba(198, 40, 40, 1) 0%,
    rgba(233, 60, 84, 1) 100%
  );
  border-radius: 999px;
  height: 20rem;
  width: 20rem;
  padding-top: 5rem;
  position: relative;
  animation: ${fadeDown} 0.8s;
  box-shadow: -1px 1px 45px -14px rgba(198, 40, 40, 1);
`

export const PokemonImg = styled.div`
  position: absolute;
  top: -11.5rem;

  img {
    height: 15rem;
  }
`

export const PokemonName = styled.span`
  font-size: 2rem;
  font-weight: 700;
  text-transform: capitalize;
  text-align: center;
  display: block;
  margin: 0.2rem 0.5rem 1.5rem;
  color: var(--white);
`

export const ContainerStrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 999px;
  height: 1.5rem;
  width: 19rem;
  gap: 0.5rem;
  font-size: 1rem;
  font-weight: 700;
  background: var(--black);
`

export const AddPokemonButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 4rem;
  width: 4rem;
  background: var(--white);
  border-radius: 999px;
  border: 0.4rem solid var(--black);
  transition: ease-in-out 0.2s;

  svg {
    width: 1.5rem;
    height: 1.5rem;
  }

  &:hover {
    transform: scale(1.2);
    background: var(--red);
    color: var(--white);
  }
`

export const MoreDetailsButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 1rem;
  font-weight: 700;
  color: var(--red);
  margin: 3rem 0;
  padding: 0.5rem 1.5rem;
  background: var(--white);
  border-radius: 999px;
  transition: ease-in-out 0.2s;

  &:hover {
    background: var(--primary-hover);
    color: var(--white);
  }
`

export const MoreDetailsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

export const MoreDetailsGoBackButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  height: 2rem;
  width: 2rem;
  border-radius: 999px;
  background: var(--white);
  color: var(--red);
  top: 3.5rem;
  left: 2.5rem;
  margin: 0.5rem;

  svg {
    height: 2rem;
    width: 2rem;
  }
`

export const MoreDetailsTitle = styled.p`
  font-size: 1.5rem;
  font-weight: 700;
  text-align: center;
  display: block;
  color: var(--white);
  margin: 0.2rem 0;
`

export const MoreDetailsStatsLabel = styled.span`
  font-size: 1rem;
  font-weight: 700;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--white);
  margin: 0.3rem 0;

  svg {
    width: 1.5rem;
    height: 1.5rem;
    margin-right: 0.5rem;
  }
`
export const MoreDetailsTypes = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const MoreDetailsTypesTitle = styled.p`
  font-size: 1rem;
  font-weight: 700;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--white);
  margin: 0.3rem 0;
`

export const MoreDetailsTypesIconBox = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--white);
  padding: 0.2rem 0.7rem;
  margin: 0 0.3rem;
  border-radius: 999px;

  img {
    width: 1rem;
    height: 1rem;
    margin-right: 0.4rem;
  }
`

export const MoreDetailsTypesName = styled.p`
  font-size: 1rem;
  color: var(--red);
`
