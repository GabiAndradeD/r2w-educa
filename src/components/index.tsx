import dynamic from 'next/dynamic'
import Load from './Load'

export { default as Load } from 'components/Load'
export { default as SideBar } from 'components/SideBar'

export const WarnPortrait = dynamic(() => import('components/WarnPortrait'), {
    loading: () => <Load />
})