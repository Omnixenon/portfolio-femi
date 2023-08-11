import { AnimationState, useAnimationItemState } from '@app/animations'
import { useMenuActions } from '@app/menu'
import { useCursorLocked } from '@helpers/hooks/useCursorLocked'
import { useElementPositions } from '@helpers/hooks/useElementPositions'
import { useHovered } from '@helpers/hooks/useHovered'
import { useEffect, useState } from 'react'

export const useCloseButton = () => {
  const menuState = useAnimationItemState('MENU_SLIDE_IN')
  const { setCloseMenu } = useMenuActions()
  const [reveal, revealProps] = useHovered()
  const [refs, { handleTrigger }] = useElementPositions()
  const [disabled, setDisabled] = useState(true)
  const cursorLockedProps = useCursorLocked({ refs, disabled })

  useEffect(() => {
    if (menuState === AnimationState.COMPLETE) {
      setDisabled(false)
      handleTrigger()
    }
  }, [menuState])

  return {
    refs,
    cursorLockedProps,
    reveal,
    revealProps,
    setCloseMenu
  }
}
