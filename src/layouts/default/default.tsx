import { useCurrentTheme } from '@app/theme'
import { BGLines } from '@components/global/bg-lines'
import { Cursor } from '@components/global/cursor'
import { Header } from '@components/global/header'
import { Menu } from '@components/global/menu'
import { ThemeProvider } from '@emotion/react'
import { GlobalStyles } from '@styles/global'
import { theme } from '@theme/index'
import Head from 'next/head'
import 'prototypes-string'
import { PropsWithChildren, useEffect, useState } from 'react'
import { RouteListener } from './components/route-listener'
import { IDefaultLayoutProps } from './utils/types'

export const DefaultLayout = ({
  children,
  title
}: PropsWithChildren<IDefaultLayoutProps>) => {
  const currentTheme = useCurrentTheme()
  const [isHydrated, setIsHydrated] = useState(false)

  useEffect(() => {
    setIsHydrated(true)
  }, [])

  if (!isHydrated) {
    return null
  }

  return (
    <ThemeProvider theme={theme[currentTheme]}>
      <Head>
        <title>{title}</title>
      </Head>
      <GlobalStyles />
      <Header />
      <Cursor />
      <Menu />
      <BGLines />
      <RouteListener>{children}</RouteListener>
    </ThemeProvider>
  )
}
