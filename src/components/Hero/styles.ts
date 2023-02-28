import styled from 'styled-components'

export const Container = styled.div`
  background: rgb(14, 9, 21);
  background: linear-gradient(
    5deg,
    rgba(14, 9, 21, 1) 0%,
    rgba(39, 21, 66, 1) 2%,
    rgba(90, 69, 251, 1) 100%
  );
  overflow: hidden;
`

export const Content = styled.div`
  margin: 3rem 0 10rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 3rem;

  @media (max-width: 72rem) {
    flex-direction: column;
  }

  @media (max-width: 31.25rem) {
    margin: 3.5rem 0 5rem;
  }
`

export const ContentLeftContainer = styled.div`
  max-width: 25rem;

  @media (max-width: 70rem) {
    max-width: 35rem;
    text-align: start;
  }

  @media (max-width: 31.25rem) {
    text-align: left;
  }
`

export const ContentLeftContainerTitle = styled.h1`
  font-size: 3.8rem;
  font-weight: 700;
  color: var(--white);

  @media (max-width: 31.25rem) {
    font-size: 2.5rem;
  }
`

export const ContentLeftContainerDescription = styled.p`
  font-size: 1rem;
  line-height: 150%;
  font-weight: 400;
  margin-bottom: 1.5rem;
  color: var(--white);
`

export const CheckMyPokemonsButton = styled.button`
  width: 100%;
  height: 3rem;
  background: #fff;
  border-radius: 999px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  font-size: 1rem;
  font-weight: 700;
  color: var(--primary);
  transition: ease-in-out 0.2s;

  &:hover {
    background: var(--primary-hover);
    color: var(--white);
  }

  svg {
    width: 1.5rem;
    height: 1.5rem;
  }

  @media (max-width: 72rem) {
    width: 13rem;
    margin: 0 auto;
  }

  @media (max-width: 31.25rem) {
    width: 100%;
  }
`

export const ContentRightContainer = styled.div`
  @media (max-width: 31.25rem) {
    margin-top: 5rem;
  }

  img {
    width: 30.5rem;
    height: auto;
  }
`
