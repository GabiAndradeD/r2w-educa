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
    l2: '#747C81',
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
  mediumBlue: css`
    ${({ theme }) => theme.colors.mediumBlue}
  `,

  white: css`
    ${({ theme }) => theme.colors.white}
  `,

  grey: css`
    ${({theme})=>theme.colors.grey}
  `
}
