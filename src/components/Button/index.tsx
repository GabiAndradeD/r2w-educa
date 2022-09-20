import { ButtonHTMLAttributes, forwardRef, ReactNode } from 'react'
import * as S from 'components/Button/styles'

export type SizeProps =
  | 'xxSmall'
  | 'xSmall'
  | 'small'
  | 'medium'
  | 'large'
  | 'xLarge'
export interface BtnProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: ReactNode
  text?: string
  size?: SizeProps
  color?: string
  svgColor?: 'white' | 'blue' | 'error'
  fullBorderRadius?: boolean
  transparent?: boolean
  fullWidth?: boolean
  fullWidthMobile?: boolean
}

const Button = forwardRef<HTMLButtonElement, BtnProps>(
  (
    {
      icon,
      text,
      size = 'xSmall',
      color = 'default',
      svgColor,
      fullBorderRadius,
      transparent,
      fullWidth,
      fullWidthMobile,
      ...props
    },
    ref
  ) => (
    <S.Container
      color={color}
      svgColor={svgColor}
      size={size}
      fullBorderRadius={fullBorderRadius}
      fullWidth={fullWidth}
      fullWidthMobile={!!fullWidth || fullWidthMobile}
      {...props}
      ref={ref}
    >
      {icon}
      {!!text && <span>{text}</span>}
    </S.Container>
  )
)

export default Button
