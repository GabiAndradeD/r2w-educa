import { animations } from 'theme/animations'
import { breakPoint } from 'theme/breakpoints'
import { colorSystem, colors, gradients } from 'theme/colors'
import componentsLayout from 'theme/componentsLayout'
import { text } from 'theme/typography'

const T = {
  colorSystem,
  colors,
  gradients,
  text,
  breakPoint,
  animations,
  ...componentsLayout
} as const

export default T
