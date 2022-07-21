import styled from 'styled-components'
import T from 'theme'

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
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(4, min-content);
  grid-template-areas:
    'title title title title'
    'InfoCard InfoCard InfoCard InfoCard'
    'table table table table';
  gap: 2rem;

  ${T.breakPoint(75)} {
    grid-template-areas:
      'title title title title'
      'InfoCard InfoCard InfoCard InfoCard'
      'table table table table';
    gap: 3rem;
  }
`
