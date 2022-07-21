import { ReactNode } from 'react'
import { useTypedSelector } from 'store/configStore'
import { ThemeProvider } from 'styled-components'
import { dark } from 'theme/themeDark'
import { light } from 'theme/themeLight'

export type DashboardProps = {
  children: ReactNode
}

const Dashboard = () => {
  const { changeTheme } = useTypedSelector(state => state)

  const isDark = changeTheme ? dark : light
  return (
    <ThemeProvider theme={isDark}>
      <p>oie</p>
    </ThemeProvider>
  )
}

export default Dashboard