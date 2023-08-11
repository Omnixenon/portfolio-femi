import { AnimationState, useAnimationItemState } from '@app/animations'
import { useUserHeaderData, useUserSocialData } from '@app/data'
import { useTheme } from '@emotion/react'
import { useCursorEvent } from '@helpers/hooks/useCursorEvent'
import { useCursorLocked } from '@helpers/hooks/useCursorLocked'
import { useElementPositions } from '@helpers/hooks/useElementPositions'
import { useEffect, useState } from 'react'

export const useFooter = () => {
  const mediaState = useAnimationItemState('MENU_SLIDE_IN')
  const socials = useUserSocialData()
  const { logo } = useUserHeaderData()
  const [emailProps] = useCursorEvent({ enterState: ['pointer'] })
  const [phoneProps] = useCursorEvent({ enterState: ['pointer'] })
  const [refs, { handleTrigger }] = useElementPositions()
  const [disabled, setDisabled] = useState(true)
  const cursorLockedProps = useCursorLocked({ refs, disabled })
  const theme = useTheme()

  useEffect(() => {
    if (mediaState === AnimationState.COMPLETE) {
      setDisabled(false)
      handleTrigger()
    }
  }, [mediaState])

  return {
    socials,
    logo,
    emailProps,
    phoneProps,
    refs,
    cursorLockedProps,
    theme
  }
}
