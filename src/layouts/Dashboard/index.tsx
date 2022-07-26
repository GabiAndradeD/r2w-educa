import { ReactNode } from 'react'
import { useTypedSelector } from 'store/configStore'
import { ThemeProvider } from 'styled-components'
import { dark } from 'theme/themeDark'
import { light } from 'theme/themeLight'
import * as C from 'components'
import * as S from 'layouts/Dashboard/styles'

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
        <C.SideBar/>
        <div id="divObserver">
          <div style={{ maxWidth: '150rem', margin: 'auto' }}>{children}</div>
        </div>
      </S.Grid>
    </ThemeProvider>
  )
}

export default Dashboard