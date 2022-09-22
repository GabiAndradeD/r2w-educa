import styled from 'styled-components'
import T from 'theme'

export const Container = styled.div`
    width: 22vw;
    height: calc(100vh - 60px);
    color: ${T.colors.white};
    background-color: #fff;
    padding: 10px 30px;
    box-sizing: border-box;
    box-shadow: 0px 0px 100px 10px rgba(120, 135, 182, 0.1);
    position: fixed;
    overflow-y: scroll;
    user-select: none;
    z-index: 1;
    margin-top: 60px;

    h2{
        color: ${T.colors.darkBlue};
        font-weight: 700;
        font-size: 32px;
        line-height: 39px;
        with: 100%;
        text-align: center;
        margin: 15px 0;
    }

    h4{
        margin: 0;
        color: ${T.colors.darkBlue};
        font-size: 24px;
    }

    &::-webkit-scrollbar {
        width: 8px;
    }

    &::-webkit-scrollbar-thumb {
        background-color: rgba(116, 124, 129, 0.26);;
        border-radius: 20px;
        border: 1px solid white;
    }
}`

export const Block = styled.div`
    width: 100%;
    margin-top: 20px;
`
export const Link = styled.div`
    border-radius: 10px;
    padding: 5px 10px;
    color: ${T.colors.grey};
    font-size: 20px;
    line-height: 34px;
    letter-spacing: 0.5px;

    &:hover {
        background-color: ${T.colors.darkBlue};
        color: ${T.colors.white};
        cursor: pointer;
    }
`