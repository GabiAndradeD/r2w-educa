import styled from 'styled-components'
import T from 'theme'

export const Container = styled.div`
    width: 100vw;
    height: 60px;
    color: ${T.colors.white};
    background-color: ${T.colors.mediumBlue};
    padding: 10px 30px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: space-between;
    user-select: none;
    position: fixed;
    z-index: 3;
}`

export const Logo = styled.img`
  box-sizing: border-box; 
  height: 70%;
  width: auto
`
