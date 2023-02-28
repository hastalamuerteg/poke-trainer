import styled from 'styled-components'

export const EmptyStateContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  img {
    height: 15rem;
  }
`

export const EmptyStateMessage = styled.p`
  font-size: 1rem;
  text-align: center;
  display: block;
  color: var(--white);
  margin: 1rem auto;
`
export const EmptyStateAlertMessage = styled.p`
  display: flex;
  justify-content: start;
  align-items: center;
  font-size: 1rem;
  font-weight: 700;
  color: var(--white);
  width: 100%;
  background: var(--white);
  color: var(--red);
  border-radius: 0.7rem;
  padding: 0.5rem;

  svg {
    height: 2rem;
    width: 2rem;
    margin-right: 0.5rem;
    align-self: start;
  }
`
