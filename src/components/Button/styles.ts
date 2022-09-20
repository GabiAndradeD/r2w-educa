import styled, { css } from 'styled-components'
import T from 'theme'
import { BtnProps } from '.'

const SizesBtn = {
  xxSmall: css`
    padding: 1.5rem 1.6rem;
    font-size: ${T.text.p4};
  `,
  xSmall: css`
    padding: 1 1.6rem;
    font-size: ${T.text.p4};
  `,
  small: css`
    font-size: ${T.text.p4};
    padding: 0.3rem 2rem;
  `,
  medium: css`
    font-size: ${T.text.p4};
    padding: 1rem 2.5rem;
  `,
  large: css`
    font-size: ${T.text.p3};
    padding: 1.2rem 2rem;
  `,
  xLarge: css`
    font-size: ${T.text.p1};
    padding: 1.5rem 3rem;
  `
}

export const Container = styled.button<BtnProps>`
  ${({
    fullWidth,
    fullWidthMobile,
    color,
    size,
    fullBorderRadius,
  }) => css`
    cursor: pointer;
    border: 0px;
    border-radius: ${fullBorderRadius ? '30rem' : '0.6rem'};
    font-weight: 400;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    flex-wrap: nowrap;
    background-position-x: 0;
    background-size: 300% !important;
    background-repeat: no-repeat;
    transition: background-position-x 150ms ease-in-out;
    width: ${fullWidthMobile ? '100%' : 'fit-content'};
    background-color: ${color};
    > span {
      color: white !important;
      font-weight: 500;
    }
    &:hover {
      background-color: ${T.colors.mediumBlue};
    }
    ${!!size && SizesBtn[size]}

    ${T.breakPoint(35)} {
      width: ${fullWidth ? '100%' : 'fit-content'};
    }

    &:hover,
    &:focus {
      background-position-x: 99.5%;
    }

    &:active {
      box-shadow: none;
    }

    &:disabled,
    &:disabled:hover {
      opacity: 0.5;
      cursor: not-allowed;
      background-position-x: 0;
    }


    svg + span {
      margin-left: 1rem;
    }

    svg {
      width: 2rem;
      min-width: 2rem;
      height: 2rem;
      min-height: 2rem;
      color: #fff;
    }
  `}
`
