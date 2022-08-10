import styled from 'styled-components'
import T from 'theme'

export const Container = styled(T.Col)`
  row-gap: 2.2rem;
  background-color: white;
  padding: 4rem 3rem;
  border-radius: 0;
  height: min-content;
  box-shadow: 0 0.1rem 1.5rem 0.1rem rgba(62, 57, 107, 0.07);
  max-width: 100%;
  overflow-y: auto;
  animation: ${T.animations.fadeIn} 0.5s ease-in-out,
    ${T.animations.move('0', '50px', '0')} 0.5s ease-in-out;

  ${T.breakPoint(30)} {
    padding: 2.8rem 5.5rem;
    max-width: 54rem;
    border-radius: 0.8rem;
  }
`

export const WrapperLogo = styled(T.Row)`
  justify-content: center;
  & img {
    width: 16rem;
  }
`

export const Paragraph = styled.p`
  margin-bottom: 1rem;
  width: 100%;
  text-align: center;
`