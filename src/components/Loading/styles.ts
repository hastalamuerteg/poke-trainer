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
`

export const Spinner = styled.div`
  border: 1rem solid var(--primary);
  border-top: 1rem var(--white) solid;
  border-radius: 999px;
  height: 7.5rem;
  width: 7.5rem;
  animation: spin 2s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }
`

export const LoadingMessage = styled.p`
  font-size: 1rem;
  text-align: center;
  display: block;
  color: var(--white);
  margin: 1rem auto;
`
