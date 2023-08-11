import { useUserHeaderData } from '@app/data'
import { useThemeActions } from '@app/theme'
import { HEADER_SEPARATOR_KEY } from '@constants/header'
import { useCursorEvent } from '@helpers/hooks/useCursorEvent'

export const useLogo = () => {
  const { logo } = useUserHeaderData()
  const formattedLogo = logo.reduce(
    (res: string[], item, index) =>
      index === 1 ? [...res, HEADER_SEPARATOR_KEY, item] : [...res, item],
    []
  )
  const [logoProps] = useCursorEvent({ enterState: ['hovered'] })
  const [ballProps] = useCursorEvent({
    enterState: ['pointer'],
    exitState: ['hovered']
  })
  const { toggleTheme } = useThemeActions()

  return {
    logo: formattedLogo,
    logoProps,
    ballProps,
    toggleTheme
  }
}
