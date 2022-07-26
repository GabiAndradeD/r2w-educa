import styled from 'styled-components'
import T from 'theme'

export const Grid = styled.div<{ openSideBar: boolean }>`
  display: grid;
  grid-template-columns: ${({ openSideBar }) =>
    openSideBar ? '100% auto' : '0 100%'};
  grid-template-rows: 5rem auto;
  grid-template-areas:
    'sidebar sidebar'
    'body body';
  height: 100vh;

  & > div:last-child {
    grid-area: body;
    padding: ${({ openSideBar }) => (openSideBar ? 0 : '2rem')};
    background-color: ${T.colors.bgDefault};

    overflow: hidden auto;

  }

  ${T.breakPoint(42)} {
    grid-template-columns: ${({ openSideBar }) =>
      openSideBar ? '25rem auto' : '25rem auto'};

    & > div:last-child {
      padding: 2rem;
    }
  }
`
