import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    text-decoration: none !important;
    -webkit-font-smoothing: antialiased !important;
    -moz-osx-font-smoothing: grayscale !important;
    list-style: none !important;
    outline: none;
    font-family: 'Inter', sans-serif;

    &::-webkit-scrollbar {
      width: 8px;
    }
  
    &::-webkit-scrollbar-thumb {
        background-color: rgba(116, 124, 129, 0.26);;
        border-radius: 20px;
        border: 1px solid white;
    }
  }

  html {
    background-color: #F9FBFD;
    overflow-x: hidden;
  }
`
