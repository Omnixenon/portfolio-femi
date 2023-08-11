import { funcs } from '@theme/funcs'

interface ThemeColors {
  primary: string

  background: string
  text: string
}

interface ThemeFonts {
  fontFamily: {
    text: string
    header: string
  }
}

export interface AppTheme {
  colors: ThemeColors
  fonts: ThemeFonts
  funcs: typeof funcs
}
