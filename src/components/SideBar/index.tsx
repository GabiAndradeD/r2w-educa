import { memo } from 'react'
import * as S from 'components/SideBar/styles'

export const baseURL = process.env.NEXT_PUBLIC_API_URL

export type SideBarProps = {
  isLogged?: boolean
}

const SideBar = () => {
  return (
    <S.Container>
      <S.Logo
        src="/imgs/logo.png"
      />
    </S.Container>
  )
}

export default memo(SideBar)