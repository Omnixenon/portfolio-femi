import { useUserProjectsData } from '@app/data'
import { useMenuKey, useMenuMedia, useMenuMediaRevealed } from '@app/menu'
import { ExitMedia, RevealMedia } from '@components/global/menu/utils/variants'
import { useAnimation } from '@helpers/hooks/useAnimation'

export const useMedia = () => {
  const { projects } = useUserProjectsData()
  const isMediaOpen = useMenuMediaRevealed()
  const mediaKey = useMenuKey()
  const mediaPath = useMenuMedia()
  const [inVariant, inVariantProps] = useAnimation('MENU_MEDIA_SLIDE_IN', {
    variant: RevealMedia
  })
  const [outVariant, outVariantProps] = useAnimation('MENU_MEDIA_SLIDE_OUT', {
    variant: ExitMedia
  })

  return {
    projects,
    isMediaOpen,
    mediaKey,
    mediaPath,
    inVariant,
    inVariantProps,
    outVariant,
    outVariantProps
  }
}
