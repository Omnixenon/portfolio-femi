import { AnimationState, useAnimationItemState } from '@app/animations'
import { useUserSocialData } from '@app/data'
import { useTheme } from '@emotion/react'
import { useAnimationInView } from '@helpers/hooks/useAnimationInView'
import { useCursorEvent } from '@helpers/hooks/useCursorEvent'
import { useCursorLocked } from '@helpers/hooks/useCursorLocked'
import { useElementPositions } from '@helpers/hooks/useElementPositions'
import { RevealContent } from '@styles/animations/variants'
import { useEffect, useState } from 'react'

export const useContact = () => {
  const contactState = useAnimationItemState('CONTACT_REVEAL_CONTENT')
  const socials = useUserSocialData()
  const { ref, variant, appProps } = useAnimationInView({
    key: 'CONTACT_REVEAL_CONTENT',
    variant: RevealContent,
    options: { rootMargin: '-140px' }
  })
  const [emailProps] = useCursorEvent({ enterState: ['pointer'] })
  const [phoneProps] = useCursorEvent({ enterState: ['pointer'] })
  const [refs, { handleTrigger }] = useElementPositions()
  const [disabled, setDisabled] = useState(true)
  const cursorLockedProps = useCursorLocked({ refs, disabled })
  const theme = useTheme()

  useEffect(() => {
    if (contactState === AnimationState.COMPLETE) {
      setDisabled(false)
      handleTrigger()
    }
  }, [contactState])

  return {
    socials,
    ref,
    variant,
    appProps,
    emailProps,
    phoneProps,
    refs,
    cursorLockedProps,
    theme
  }
}
