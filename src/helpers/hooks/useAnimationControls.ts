import { ANIMATE_LABEL } from '@styles/animations/constants'
import { useAnimation } from 'framer-motion'
import { useEffect, useState } from 'react'

interface IUseAnimationControlsProps {
  variant: Function
  endedCallback?: Function
}

export const useAnimationControls = ({
  variant,
  endedCallback
}: IUseAnimationControlsProps) => {
  const [trigger, setTrigger] = useState(false)
  const animation = useAnimation()

  const handleTriggerAnimation = () => setTrigger(true)
  const handleResetAnimation = () => {
    endedCallback && endedCallback()
    setTrigger(false)
  }

  useEffect(() => {
    if (trigger) {
      animation.start(ANIMATE_LABEL)
    }
  }, [animation, trigger])

  return [
    {
      ...variant(animation),
      onAnimationComplete: handleResetAnimation
    },
    handleTriggerAnimation
  ] as const
}
