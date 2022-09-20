import { ReactNode } from 'react'
import { useTypedSelector } from 'store/configStore'
import * as S from 'components/LayoutAuthentication/styles'

export type LayoutAuthenticationProps = {
  children: ReactNode
  description: string
  linksFooter?: { link: string; text: string }[]
}

const LayoutAuthentication = ({
  children,
  description,
}: LayoutAuthenticationProps) => {
  return (
    <S.Container>
      <S.WrapperLogo>
        <img src="/imgs/logo.png" alt="" />
      </S.WrapperLogo>

      <S.Paragraph>{description}</S.Paragraph>

      {children}
    </S.Container>
  )
}

export default LayoutAuthentication