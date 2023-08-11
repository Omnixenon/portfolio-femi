import { useMenuRevealed } from '@app/menu'
import { useAnimation } from '@helpers/hooks/useAnimation'
import { RevealMenu } from '../utils/variants'

export const useMenu = () => {
  const isMenuOpen = useMenuRevealed()
  const [menuVariant, menuProps] = useAnimation('MENU_SLIDE_IN', {
    variant: RevealMenu
  })

  return { isMenuOpen, menuVariant, menuProps }
}
