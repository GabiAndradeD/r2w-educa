import { ReactNode } from 'react'
import * as S from 'layouts/Common/styles'
import { useTypedSelector } from 'store/configStore'
import { ThemeProvider } from 'styled-components'
import { dark } from 'theme/themeDark'
import { light } from 'theme/themeLight'
import * as C from 'components'

export type DashboardProps = {
  children: ReactNode
}

const Dashboard = ({ children }: DashboardProps) => {
  const { toggleBtnNav } = useTypedSelector(state => state.changeSideBar)
  const { changeTheme } = useTypedSelector(state => state)

  const isDark = changeTheme ? dark : light
  return (
    <ThemeProvider theme={isDark}>
      <S.Grid openSideBar={toggleBtnNav}>
        <C.Header />

        <C.SideBar isLogged={false} />
        <div id="divObserver">{children}</div>
      </S.Grid>
    </ThemeProvider>
  )
}

export default Dashboard
