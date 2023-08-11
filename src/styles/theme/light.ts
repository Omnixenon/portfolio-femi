import { AppTheme } from '@styles/types/theme.types'
import { THEME_COLORS } from './colors'
import { funcs } from './funcs'

const colors: AppTheme['colors'] = {
  primary: THEME_COLORS.red[700],

  background: THEME_COLORS.white,
  text: THEME_COLORS.black
}

const fonts: AppTheme['fonts'] = {
  fontFamily: {
    text: 'Outfit, sans-serif',
    header: 'Kodchasan, sans-serif'
  }
}

export const LIGHT_THEME: AppTheme = {
  funcs,
  fonts,
  colors
}
