import { createGlobalStyle } from 'styled-components'
import T from 'theme'

export default createGlobalStyle`
  /* inter-regular - latin */
@font-face {
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  src: local(''),
       url('/folder/inter-v7-latin-regular.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
       url('/folder/inter-v7-latin-regular.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
}
/* inter-300 - latin */
@font-face {
  font-family: 'Inter';
  font-style: normal;
  font-weight: 300;
  src: local(''),
       url('/folder/inter-v7-latin-300.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
       url('/folder/inter-v7-latin-300.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
}
/* inter-500 - latin */
@font-face {
  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  src: local(''),
       url('/folder/inter-v7-latin-500.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
       url('/folder/inter-v7-latin-500.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
}
/* inter-600 - latin */
@font-face {
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  src: local(''),
       url('/folder/inter-v7-latin-600.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
       url('/folder/inter-v7-latin-600.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
}
/* inter-700 - latin */
@font-face {
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  src: local(''),
       url('/folder/inter-v7-latin-700.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
       url('/folder/inter-v7-latin-700.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
}
/* inter-800 - latin */
@font-face {
  font-family: 'Inter';
  font-style: normal;
  font-weight: 800;
  src: local(''),
       url('/folder/inter-v7-latin-800.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
       url('/folder/inter-v7-latin-800.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
}
/* inter-900 - latin */
@font-face {
  font-family: 'Inter';
  font-style: normal;
  font-weight: 900;
  src: local(''),
       url('/folder/inter-v7-latin-900.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
       url('/folder/inter-v7-latin-900.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
}


  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    text-decoration: none !important;
    -webkit-font-smoothing: antialiased !important;
    -moz-osx-font-smoothing: grayscale !important;
    list-style: none !important;
    outline: none;
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif !important;
  }

  html {
    font-size: 62.5%;
  }

  body,
  html,
  #__next {
    background-color: ${T.colors.bgDefault};
    color: ${T.colors.darkGrey};
  }

  body, #root, input, select, textarea, button {
    font: 400 1.6rem 'Poppins', sans-serif;
  }

  button {
    border: none;
    border-radius: 0.6rem;
  }

  #__next {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    min-height: 100vh;
  }

  a,
  a:active {
    color: inherit;
    text-decoration: none;
  }

  button {
    cursor: pointer;
  }

  ::-webkit-scrollbar,
  scrollbar-width {
    width: 1.2rem !important;
    height: 1.2rem !important;
    background-color: ${T.colors.light};
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) =>
      theme.colors.light === '#E3E3E3' ? '#b9b9b9' : T.colors.bgDefault};
    border-radius: 2rem;
    border: 0.3rem solid ${T.colors.light};
  }

  :root {
    scrollbar-color: ${T.colors.bgDefault} ${T.colors.light} !important;
    scrollbar-width: 1.2rem !important;
  }


`
