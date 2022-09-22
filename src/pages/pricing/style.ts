import styled from 'styled-components'
import T from 'theme'

export const Container = styled(T.Col)`
  width: 100vw;
  height: calc(100vh - 60px);
  background-position: center center;
  background-size: cover;
  display: flex;
  align-items: center;

  h1 {
    color: ${T.colors.grey};
    font-style: normal;
    font-weight: 700;
    font-size: 48px;
    line-height: 58px;
    margin-top: 30px;
  }

  h3 {
    color: ${T.colors.grey};
    margin-left: 60px;
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 39px;
  }
`

export const FlexTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 50px;
`

export const PricingContainer = styled.section`
  display: flex;
  justify-content: space-around;
  padding: 0 30px;
  align-items: center;
  width: 100%;
  margin-top: 40px;
`
export const PricingCard = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-top: 30px;
`