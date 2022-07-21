import { ReactNode } from 'react'
import * as S from 'layouts/Error/styles'
import { useTypedSelector } from 'store/configStore'
import { ThemeProvider } from 'styled-components'
import { dark } from 'theme/themeDark'
import { light } from 'theme/themeLight'

const Error = ({ children }: { children: ReactNode }) => {
  const { changeTheme } = useTypedSelector(state => state)

  const isDark = changeTheme ? dark : light

  return (
    <ThemeProvider theme={isDark}>
      <S.Grid>
        <S.Main>{children}</S.Main>
      </S.Grid>
    </ThemeProvider>
  )
}

export default Error
