import '@emotion/react'
import type { AppTheme } from '@styles/types/theme.types'

declare module '@emotion/react' {
  export interface Theme extends AppTheme {}
}
