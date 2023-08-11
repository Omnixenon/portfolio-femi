import { useMenuActions } from '@app/menu'
import { useRouter } from 'next/router'
import { PropsWithChildren, useEffect } from 'react'

export const RouteListener = ({ children }: PropsWithChildren) => {
  const router = useRouter()
  const { setCloseMenu } = useMenuActions()

  useEffect(() => {
    const handleRouteChange = () => {
      setCloseMenu()
    }

    router.events.on('routeChangeStart', handleRouteChange)

    return () => {
      router.events.off('routeChangeStart', handleRouteChange)
    }
  }, [])

  return <>{children}</>
}
