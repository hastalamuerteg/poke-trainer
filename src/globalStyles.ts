import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`

  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    border: 0;
    box-sizing: border-box;
  }

  html {
    --primary: #855AC9;
    --primary-hover: #271542;
    --white: #FFFFFF;
    --black: #000000;
    --background: #0E0915;
    --red: #FB1B1B;
  }

  body {
    font-family: 'Poppins', sans-serif;
    background: var(--background);

    &::-webkit-scrollbar {
      width: 0.5rem;               
    }

    &::-webkit-scrollbar-track {
      background: var(--primary);        
    }

    &::-webkit-scrollbar-thumb {
      background-color: #ffffff;    
      border-radius: .5rem;       
      border: 0.15rem solid #FFFFFF;  
    }
  }

  ul {
    list-style: none;
  }

  a {
    text-decoration: none;
  }

  button {
    font-family: 'Montserrat', sans-serif;
    cursor: pointer;
  }

  img {
    display: block;
    max-width: 100%;
    height: auto;
  }

  .wrapper {
    max-width: 1250px;
    padding: 0 1rem;
    margin: 0 auto;
  }
`
