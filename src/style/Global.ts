import { createGlobalStyle } from 'styled-components'
import back from 'img/back.png'

const GlobalStyle = createGlobalStyle`
  body {
    // background-color: ${({ theme }) => theme.colors.background};

    #root {
      background: ${({ theme }) => (theme.isDark ? '#050545' : `url(${back}) no-repeat`)}; 
      background-size: cover;
    }
  }
  /* Scrollbar */
  ::-webkit-scrollbar {
    width: 8px;
  }
  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.primary}; 
    border-radius: 8px;
  }
  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px ${({ theme }) => theme.colors.primary}; 
    border-radius: 10px;
  }
`

export default GlobalStyle
