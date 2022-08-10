import dynamic from 'next/dynamic'
import Load from './Load'

export { default as Load } from 'components/Load'
export { default as SideBar } from 'components/SideBar'
export { default as InputOutlined } from 'components/InputOutlined'
export { default as Button } from 'components/Button'

export const WarnPortrait = dynamic(() => import('components/WarnPortrait'), {
    loading: () => <Load />
})

export const LayoutAuthentication = dynamic(() => import('components/LayoutAuthentication'), {
    loading: () => <Load />
})