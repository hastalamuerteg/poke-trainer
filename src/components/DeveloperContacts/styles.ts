import styled from 'styled-components'

export const Container = styled.ul`
  display: flex;
  justify-content: space-between;
  gap: 0.5rem;
`

export const Link = styled.a.attrs({ target: '_blank' })`
  background: var(--white);
  padding: 0.5rem;
  border-radius: 999px;

  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    width: 2rem;
    height: 2rem;
    color: var(--primary);
  }
`
