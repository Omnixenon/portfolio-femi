import { AnimationState, useAnimationItemState } from '@app/animations'
import { useMenuActions } from '@app/menu'
import { useCursorLocked } from '@helpers/hooks/useCursorLocked'
import { useElementPositions } from '@helpers/hooks/useElementPositions'
import { useHovered } from '@helpers/hooks/useHovered'
import { useEffect, useState } from 'react'

export const useMenuButton = () => {
  const headerState = useAnimationItemState('HEADER_FADE_IN_DOWN')
  const { setOpenMenu } = useMenuActions()
  const [reveal, revealProps] = useHovered()
  const [refs, { handleTrigger }] = useElementPositions()
  const [disabled, setDisabled] = useState(true)
  const cursorLockedProps = useCursorLocked({ refs, disabled })

  useEffect(() => {
    if (headerState === AnimationState.COMPLETE) {
      setDisabled(false)
      handleTrigger()
    }
  }, [headerState])

  return {
    refs,
    cursorLockedProps,
    reveal,
    revealProps,
    setOpenMenu
  }
}
