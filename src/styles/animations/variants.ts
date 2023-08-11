import { AnimationControls } from 'framer-motion'
import {
  ANIMATE_LABEL,
  ANIMATION_EASING,
  EXIT_LABEL,
  INITIAL_LABEL
} from './constants'

const commonProps = {
  initial: INITIAL_LABEL,
  animate: ANIMATE_LABEL,
  exit: EXIT_LABEL
}

export const FadeInDown = (initialY = -72) => ({
  ...commonProps,
  variants: {
    [INITIAL_LABEL]: { y: initialY, opacity: 0 },
    [ANIMATE_LABEL]: {
      y: 0,
      opacity: 1,
      transition: { duration: 1, ease: ANIMATION_EASING }
    }
  }
})

export const FadeInUp = (initialY = 72) => ({
  ...commonProps,
  variants: {
    [INITIAL_LABEL]: { y: initialY, opacity: 0 },
    [ANIMATE_LABEL]: {
      y: 0,
      opacity: 1,
      transition: { duration: 1, ease: ANIMATION_EASING }
    }
  }
})

export const StaggeredSlideUp = (initialY = 800) => {
  return [
    {
      ...commonProps,
      variants: {
        [INITIAL_LABEL]: { y: initialY },
        [ANIMATE_LABEL]: { y: 0, transition: { staggerChildren: 0.2 } }
      }
    },
    {
      variants: {
        [INITIAL_LABEL]: { y: initialY },
        [ANIMATE_LABEL]: {
          y: 0,
          transition: { duration: 1, ease: ANIMATION_EASING }
        }
      }
    }
  ]
}

export const RevealContent = (animation: AnimationControls) => ({
  ...commonProps,
  [ANIMATE_LABEL]: animation,
  variants: {
    [INITIAL_LABEL]: { opacity: 0, y: 72 },
    [ANIMATE_LABEL]: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: ANIMATION_EASING
      }
    }
  },
  transition: { duration: 0.8, ease: ANIMATION_EASING }
})
