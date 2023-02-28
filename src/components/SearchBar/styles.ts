import styled from 'styled-components'

export const Container = styled.div`
  width: 30.5rem;
  height: 4rem;
  display: flex;

  @media (max-width: 65.63rem) {
    width: 100%;
  }
`

export const InputText = styled.input`
  flex: 1;
  background: none;
  border: 0.15rem solid var(--primary);
  border-top-left-radius: 999px;
  border-bottom-left-radius: 999px;
  border-right: 0;
  padding: 1rem;
  font-size: 1rem;
  line-height: 150%;
  font-weight: 400;
  outline: none;
  color: var(--primary);
`

export const SearchButton = styled.button`
  width: 4rem;
  height: 4rem;
  background: var(--primary);
  border-top-right-radius: 999px;
  border-bottom-right-radius: 999px;
  position: relative;

  svg {
    width: 1.8rem;
    height: 1.8rem;
    color: #ffffff;
  }
`
