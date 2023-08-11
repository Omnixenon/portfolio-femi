import { ANIMATE_LABEL } from '@styles/animations/constants'
import { ANIMATION_KEYS } from '@styles/animations/keys'
import { useAnimation } from 'framer-motion'
import { useEffect } from 'react'
import { IntersectionOptions, useInView } from 'react-intersection-observer'
import { useAnimation as useAppAnimation } from './useAnimation'
import { useMediaQuery } from './useMediaQuery'

interface IUseAnimationControlsProps {
  variant: Function
  key: keyof typeof ANIMATION_KEYS
  options?: IntersectionOptions
}

const defaultOptions = {
  triggerOnce: true
}

export const useAnimationInView = ({
  variant,
  key,
  options = {}
}: IUseAnimationControlsProps) => {
  const animation = useAnimation()
  const matches = useMediaQuery('xs')
  const [ref, inView] = useInView({
    ...defaultOptions,
    ...options,
    ...{ rootMargin: matches ? options?.rootMargin ?? '-300px' : '-50px' }
  })

  const [appVariant, appProps] = useAppAnimation(key, {
    variant
  })

  useEffect(() => {
    if (inView) {
      animation.start(ANIMATE_LABEL)
    }
  }, [animation, inView])

  return { ref, variant: appVariant(animation), appProps }
}
