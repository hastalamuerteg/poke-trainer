import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 25rem;
  padding: 1rem;
  width: auto;
  margin: 0 auto;

  img {
    height: 20rem;
    margin: 1rem;
  }
`
export const EmptyStateMessage = styled.p`
  font-size: 1rem;
  text-align: center;
  display: block;
  color: var(--white);
  margin: 1rem auto;
`
