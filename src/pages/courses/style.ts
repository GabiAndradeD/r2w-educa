import styled from "styled-components";
import T from 'theme'

export const Container = styled(T.Col)`
  width: 20vw;
  height: calc(100vh - 60px);
  background-position: center center;
  background-size: cover;
  display: flex;
  justify-content: space-between;

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

export const Content = styled.div`
  width: 98vw;
  height: 100%;
  padding-left: 22vw;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 60px;
`

export const Category = styled.div`
  width: 90%;
  height: calc(78vw / 3.6);
  background-color: white;
  border: 1.5px solid #EFF1F9;
  box-shadow: 0px 0px 100px 10px rgba(120, 135, 182, 0.1);
  margin-top: 30px;
`

export const CategoryHeader = styled.div`
  display: flex;
  justify-content: space-between;
  height: 28%;

  img{
    width: 88px;
    height: 80px;
    margin: 20px 13px 5px 20px;
  }

  section{
    width: 50%;
  }

  section > div{
    display: flex;
    align-items: center;
  }

  h1{
    margin: 0 0 0 10px;
    font-weight: 500;
    font-size: 48px;
  }
`

export const CoursesNumber = styled.div`
  height: 100%;
  display: flex;
  align-items: flex-end;

  div{
    background-color: ${T.colors.darkBlue};
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 200px;
    height: 50px;
    padding: 0;
  }

  img{
    width: 39px;
    height: 36px;
    margin: 0;
  }

  p{
    font-size: 32px;
    line-height: 39px;
    color: white;
  }
`

export const Line = styled.div`
  background-color: ${T.colors.darkBlue};
  height: 4px;
  width: 23%;
  margin-left: 23px;
`

export const CategoryBody = styled.div`
  height: 60%;
  width: 100%;
  display: grid;
  grid-template-columns: auto auto;
  gap: 23px;
  padding: 20px 23px 0px 23px;

  div{
    text-align: center;
    padding: 20px 0;
    font-size: 30px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    &:hover{
      cursor: pointer;
      background: rgba(116, 124, 129, 0.1);
    }

    h4{
      color: ${T.colors.grey};
      font-weight: 500;
      font-size: 24px;
      line-height: 29px;
    }

    div{
      padding: 0;
      display: flex;
      flex-direction: row;
      align-items: center;

      img{
        width: 21px;
        height: 15px;
        margin: 4px 0 0 3px;
      }

      p{
        color: ${T.colors.grey};
        font-weight: 300;
        font-size: 24px;
        line-height: 29px;
      }
    }
  }
`

export const CategoryFooter = styled.div`
  width: 100%;
  heigth: 30px;
  display: flex;
  justify-content: flex-end;
  font-weight: 500;
  font-size: 24px;
  line-height: 29px;
  color: #165AC1;
  padding: 10px 10px 7px 0px;

  &:hover{
    cursor: pointer;
    text-decoration: underline !important;
  }

  img{
    width: 27px;
    height: 27px;
    margin: 3px 0 0 4px;
  }
`