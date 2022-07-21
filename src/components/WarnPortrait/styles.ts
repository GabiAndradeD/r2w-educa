import styled, { keyframes } from 'styled-components'
import T from 'theme'
import * as Icon from 'components/Icons'

const rotate = keyframes`
  80%, 100% {
    transform: rotate(45deg);
  }
`

export const Container = styled(T.Col)`
  position: fixed;
  z-index: 9999;
  top: 0;
  left: 0;
  background: #000000c4;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
`

export const IconScreenRotation = styled(Icon.ScreenRotation)`
  transform: rotate(-30deg);
  animation: ${rotate} 1.8s ease-in-out infinite alternate-reverse;
`

export const Msg = styled.p`
  margin-top: 3rem;
  display: flex;
  max-width: 60rem;
  text-align: center;
  line-height: 2;
  font-size: 2.2rem;
  color: #fff;
  text-shadow: 0 0 2rem #000;
`
