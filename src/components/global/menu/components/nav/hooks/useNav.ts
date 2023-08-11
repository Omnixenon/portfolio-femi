import { useUserProjectsData } from '@app/data'
import { useMenuActions } from '@app/menu'
import { SlideArrow } from '@components/global/menu/utils/variants'
import { useAnimation } from '@helpers/hooks/useAnimation'
import { useCursorEvent } from '@helpers/hooks/useCursorEvent'

export const useNav = () => {
  const { projects } = useUserProjectsData()
  const [navProps] = useCursorEvent({ enterState: ['pointer'] })
  const [variant, contentProps] = useAnimation('MENU_ARROW_SLIDE_IN', {
    variant: SlideArrow
  })
  const { setCloseMedia, setRevealMedia } = useMenuActions()

  const handleEnter =
    ({ id, media }: { id: string; media: string }) =>
    () => {
      setRevealMedia({ id, media })
    }
  const handleLeave = () => setCloseMedia()

  return {
    projects,
    navProps,
    variant,
    contentProps,
    handleEnter,
    handleLeave
  }
}
