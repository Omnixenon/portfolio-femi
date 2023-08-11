import { useAnimationActions } from '@app/animations'
import { ANIMATION_KEYS } from '@styles/animations/keys'
import { useEffect } from 'react'

interface IUseAnimationProps {
  variant: Function
  startCallback?: Function
  endCallback?: Function
}

export const useAnimation = (
  animationKey: keyof typeof ANIMATION_KEYS,
  { variant, startCallback, endCallback }: IUseAnimationProps
) => {
  const { initializeAnimation, setAnimationState } = useAnimationActions()

  const id = ANIMATION_KEYS[animationKey]

  const handleStart = () => {
    startCallback && startCallback()
    setAnimationState(id, 'PROGRESSING')
  }

  const handleEnd = () => {
    endCallback && endCallback()
    setAnimationState(id, 'COMPLETE')
  }

  useEffect(() => {
    initializeAnimation(id)
  }, [])

  return [
    variant,
    {
      onAnimationStart: handleStart,
      onAnimationComplete: handleEnd
    }
  ] as const
}
