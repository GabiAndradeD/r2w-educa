import styled, { css } from 'styled-components'
import { BoxArrowInRight, Envelope, Lock } from '@styled-icons/bootstrap'
import T from 'theme'

export const Form = styled.form`
  display: flex;
  width: 100%;
  flex-direction: column;
`
export const stylesIcons = css`
  width: 2rem;
  min-width: 2rem;
  height: 2rem;
  min-height: 2rem;
  color: #165AC1;
`

export const inputLine = styled.div`
 display: flex;
 justify-content: space-between;
`

export const divider = styled.div`
 width: 20px;
`

export const IconEmail = styled(Envelope)`
  ${stylesIcons}
`

export const IconPassword = styled(Lock)`
  ${stylesIcons}
`

export const IconSignIn = styled(BoxArrowInRight)`
  ${stylesIcons}
`

export const ContainerInfoCard = styled(T.Row)`
  grid-area: InfoCard;
  display: grid;
  gap: 2rem;
  grid-template-columns: 1fr;
  grid-template-areas: 'bv' 'c' 'aj' 'wi';

  ${T.breakPoint(57)} {
    grid-template-columns: 1fr 1fr;
    grid-template-areas: 'bv c' 'aj wi';
  }

  ${T.breakPoint(74)} {
    grid-template-columns: repeat(5, 1fr);
    grid-template-areas: 'bv c aj wi';
  }

  ${T.breakPoint(75)} {
    gap: 1.5rem;
  }
`

export const Container = styled(T.Col)`
  width: 100vw;
  height: 100vh;
  background-image: url('/imgs/background.png');
  background-position: center center;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  padding-top: 60px;
`
