import { css } from 'styled-components'

export const colorSystem = {
  primary: {
    l1: '#004200',
    l2: '#00AD01',
    l3: '#00FF02',
    l4: '#9EFF9F',
    l5: '#E0FFE1'
  },
  tertiary: {
    l1: '#420021',
    l2: '#AD0057',
    l3: '#FF0080',
    l4: '#FF9ECF',
    l5: '#FFE0F0'
  },
  success: {
    l1: '#004226',
    l2: '#21A169',
    l3: '#66CB9F',
    l4: '#ADF0D3',
    l5: '#E0FFF2'
  },
  warning: {
    l1: '#421200',
    l2: '#A14321',
    l3: '#F7936F',
    l4: '#F0BFAD',
    l5: '#FFE9E0'
  },
  danger: {
    l1: '#420001',
    l2: '#A12123',
    l3: '#F16063',
    l4: '#F0ADAE',
    l5: '#FFE0E1'
  },
  info: {
    l1: '#003742',
    l2: '#218CA1',
    l3: '#68DBF2',
    l4: '#ADE5F0',
    l5: '#E0FAFF'
  },
  grey: {
    l1: '#FAFAFA',
    l2: '#F7FAFC',
    l3: '#EDF2F7',
    l4: '#E2E8F0',
    l5: '#CBD5E0',
    l6: '#A0AEC0',
    l7: '#718096',
    l8: '#4A5568',
    l9: '#2D3748',
    l10: '#1A202C'
  }
}

export const colors = {
  primary: css`
    ${({ theme }) => theme.colors.primary}
  `,

  cardColor: css`
    ${({ theme }) => theme.colors.cardColor}
  `,

  bgGray: css`
    ${({ theme }) => theme.colors.bgGray}
  `,

  secondary: css`
    ${({ theme }) => theme.colors.secondary}
  `,

  strongRed: css`
    ${({ theme }) => theme.colors.strongRed}
  `,

  error: css`
    ${({ theme }) => theme.colors.error}
  `,

  success: css`
    ${({ theme }) => theme.colors.success}
  `,

  blue: css`
    ${({ theme }) => theme.colors.blue}
  `,

  lightBlue: css`
    ${({ theme }) => theme.colors.lightBlue}
  `,

  darkBlue: css`
    ${({ theme }) => theme.colors.darkBlue}
  `,

  info: css`
    ${({ theme }) => theme.colors.info}
  `,

  littleDarkFill: css`
    ${({ theme }) => theme.colors.littleDarkFill}
  `,

  subtitle: css`
    ${({ theme }) => theme.colors.subtitle}
  `,

  warn: css`
    ${({ theme }) => theme.colors.warn}
  `,

  light: css`
    ${({ theme }) => theme.colors.light}
  `,

  white: css`
    ${({ theme }) => theme.colors.white}
  `,

  bgDefault: css`
    ${({ theme }) => theme.colors.bgDefault}
  `,

  bgAuthentication: css`
    ${({ theme }) => theme.colors.bgAuthentication}
  `,

  disabled: css`
    ${({ theme }) => theme.colors.disabled}
  `,

  overlay: css`
    ${({ theme }) => theme.colors.overlay}
  `,

  dark: css`
    ${({ theme }) => theme.colors.dark}
  `,

  grey: css`
    ${({ theme }) => theme.colors.grey}
  `,

  darkGrey: css`
    ${({ theme }) => theme.colors.darkGrey}
  `,

  lightGrey: css`
    ${({ theme }) => theme.colors.lightGrey}
  `,

  greySmooth: css`
    ${({ theme }) => theme.colors.greySmooth}
  `,

  greyTransparent: css`
    ${({ theme }) => theme.colors.greyTransparent}
  `,

  lightSmooth: css`
    ${({ theme }) => theme.colors.lightSmooth}
  `,

  silverSmooth: css`
    ${({ theme }) => theme.colors.silverSmooth}
  `,

  graphite: css`
    ${({ theme }) => theme.colors.graphite}
  `,

  blackWhite: css`
    ${({ theme }) => theme.colors.blackWhite}
  `,

  secondaryGreen: css`
    ${({ theme }) => theme.colors.secondaryGreen}
  `,

  card: css`
    ${({ theme }) => theme.colors.card}
  `,

  textBody: css`
    ${({ theme }) => theme.colors.textBody}
  `,

  Authentication: css`
    ${({ theme }) => theme.colors.Authentication}
  `,

  table1: css`
    ${({ theme }) => theme.colors.table1}
  `,

  lightness: css`
    ${({ theme }) => theme.colors.lightness}
  `
}

export const gradients = {
  bgGradient: css`
    ${({ theme }) => theme.gradients.bgGradient}
  `,

  primary: css`
    ${({ theme }) => theme.gradients.primary}
  `,

  red: css`
    ${({ theme }) => theme.gradients.red}
  `,

  green: css`
    ${({ theme }) => theme.gradients.green}
  `,

  talentingGreen: css`
    ${({ theme }) => theme.gradients.talentingGreen}
  `,

  google: css`
    ${({ theme }) => theme.gradients.google}
  `,

  facebook: css`
    ${({ theme }) => theme.gradients.facebook}
  `,

  linkedin: css`
    ${({ theme }) => theme.gradients.linkedin}
  `,

  infoCard: css`
    ${({ theme }) => theme.gradients.infoCard}
  `
}
