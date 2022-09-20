import { InputHTMLAttributes, ReactNode, useState } from 'react'
import * as S from 'components/InputOutlined/styles'

export interface InputOutlinedProps
  extends InputHTMLAttributes<HTMLInputElement> {
  label: string
  register: object
  error: string | undefined
  onBlur?: () => void
  icon?: ReactNode
  control?: any
  changeVisibiltyPassword?: boolean
}

const InputOutlined = ({
  id,
  type,
  placeholder,
  label,
  register,
  error,
  icon,
  disabled,
  control,
  changeVisibiltyPassword,
  ...props
}: InputOutlinedProps) => {
  const [viewPassword, setViewPassword] = useState(false)

  const changeViewPassword = (e: { preventDefault: () => void }) => {
    e.preventDefault()
    setViewPassword(prevState => !prevState)
  }

  const typeField = () => {
    if (type === 'password') return viewPassword ? 'text' : type

    return type
  }

  const paddingRightLarge = () => {
    if (icon && !changeVisibiltyPassword) {
      return '1.0rem 3.5rem 1.0rem 1.1rem'
    } else if (changeVisibiltyPassword) {
      return '1.0rem 3.5rem 1.0rem 1.1rem'
    } else {
      return '1.0rem 1.1rem'
    }
  }

  return (
    <S.ContainerInput>
      <S.WrapperInput error={!!error} disabledIcon={!!disabled}>
        {icon}
        {changeVisibiltyPassword && (
          <S.BtnIconsPassword onClick={changeViewPassword}>
            {viewPassword ? <S.IconViewPassword /> : <S.IconHiddenPassword />}
          </S.BtnIconsPassword>
        )}
        <S.Label htmlFor={id}>{label}</S.Label>
        <S.Input
          type={typeField()}
          autoComplete="off"
          id={id}
          placeholder={placeholder}
          error={!!error}
          paddingRightLarge={paddingRightLarge()}
          disabled={disabled}
          {...register}
          {...props}
        />
      </S.WrapperInput>
      <S.MsgError error={!!error}>{!!error && error}</S.MsgError>
    </S.ContainerInput>
  )
}

export default InputOutlined
