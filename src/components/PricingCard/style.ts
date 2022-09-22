import styled, { css } from 'styled-components'
import T from 'theme'

export const Card = styled.div<{ color: string }>`
    ${({
    color,
}) => css`
        width: calc(80vw / 4);
        height: 500px;
        background-color: ${color};
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
        box-sizing: border-box;
        padding-top: 10px;
        box-shadow: 0px 0px 100px 10px rgba(120, 135, 182, 0.1);
    `}
`

export const CardContent = styled.div`
    background-color: white;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 10px 0;

    h4{
        color: #002E74;
        font-style: normal;
        font-weight: 700;
        font-size: 26px;
        line-height: 31px;
    }

    p{
        color: ${T.colors.grey};
        text-align: center;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 70%;
        height: 10%;
    }
`
export const Caracteristics = styled.div`
    width: 100%;
    height: 60%;
    bottom: 0;
`

export const Price = styled.p`
    font-weight: 700;
    font-size: 16px;
    text-align: center;
    color: #00000;
`