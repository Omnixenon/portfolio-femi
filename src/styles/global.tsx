import { css, Global, useTheme } from '@emotion/react'
import { AppTheme } from './types/theme.types'

const styles = (theme: AppTheme) => css`
  * {
    text-decoration: none;
    cursor: none;
  }

  html {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    font-size: 16px;
  }

  body {
    position: relative;
    font-family: Outfit;
    background-color: ${theme.colors.background};
    color: ${theme.colors.text};
    overscroll-behavior: none;
    overflow-x: hidden;

    &::-webkit-scrollbar {
      display: none;
    }

    -ms-overflow-style: none;
    scrollbar-width: none;
  }
`

export const GlobalStyles = () => {
  const theme = useTheme()
  return <Global styles={styles(theme)} />
}
