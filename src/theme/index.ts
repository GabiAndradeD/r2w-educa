import { animations } from 'theme/animations'
import { breakPoint } from 'theme/breakpoints'
import { colorSystem, colors } from 'theme/colors'
import componentsLayout from 'theme/componentsLayout'
import { text } from 'theme/typography'

const T = {
  colorSystem,
  colors,
  text,
  breakPoint,
  animations,
  ...componentsLayout
} as const

export default T
