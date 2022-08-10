import { Eye, EyeSlash } from '@styled-icons/bootstrap'
import styled, { css } from 'styled-components'
import T from 'theme'

export const ContainerInput = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 0.7rem;
`

export const WrapperInput = styled.div<{
  error: boolean
  disabledIcon: boolean
}>`
  ${({ disabledIcon }) => css`
    display: flex;
    flex-direction: column;
    position: relative;

    & > svg {
      position: absolute;
      z-index: 2;
      right: 1rem;
      top: 50%;
      ${disabledIcon &&
      css`
        cursor: not-allowed;
        opacity: 0.5;
      `}
    }
  `}
`

export const Input = styled.input<{
  error: boolean
  paddingRightLarge: string
}>`
  ${({ paddingRightLarge }) => css`
    appearance: none;
    -moz-appearance: textfield;
    -webkit-appearance: textfield;
    border-radius: 0.6rem;
    box-shadow: 0px 1px 2px rgba(50, 50, 71, 0.08),
      0px 0px 1px rgba(50, 50, 71, 0.2);
    outline: none;
    padding: ${paddingRightLarge};
    background-color: ${T.colors.white};
    font-size: ${T.text.p4};
    z-index: 1;
    transition: all 0.2s ease-in-out;

    &::placeholder {
      font-size: ${T.text.p4};
    }

    &:required:invalid + label:before {
      content: '*';
    }

    &:focus + label,
    &:not(:placeholder-shown) + label {
      font-size: ${T.text.p4};
      font-weight: 500;
      margin-top: -1.9rem;
      margin-left: 0;
      cursor: default;
      z-index: 2;
    }

    &:-webkit-autofill:focus + label,
    &:-webkit-autofill:not(:placeholder-shown) + label {
      font-size: ${T.text.p4};
      font-weight: 500;
      margin-top: -1.9rem;
      margin-left: 0;
      cursor: default;
      z-index: 2;
    }
  `}
`

export const MsgError = styled.small<{ error: boolean }>`
  display: flex;
  justify-content: flex-end;
  font-size: ${T.text.p4};
  min-height: 1.8rem;
  visibility: ${({ error }) => (error ? 'visible' : 'hidden')};
`

export const BtnIconsPassword = styled.button`
  right: 4rem;
  position: absolute;
  background-color: transparent;
  z-index: 2;
  width: min-content;
  height: min-content;
  border-radius: 0.4rem;
  top: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 0.1rem dashed transparent;
`

export const IconViewPassword = styled(Eye)`
  width: 2rem;
  height: 2rem;
`

export const IconHiddenPassword = styled(EyeSlash)`
  width: 2rem;
  height: 2rem;
`
export const Label = styled.label`
    color: ${T.colors.mediumBlue};
    margin-bottom: 5px;
    font-size: 18px;
    font-weight: 600
`