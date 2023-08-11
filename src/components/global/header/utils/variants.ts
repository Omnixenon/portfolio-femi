import {
  ANIMATE_LABEL,
  ANIMATION_EASING,
  EXIT_LABEL,
  INITIAL_LABEL
} from '@styles/animations/constants'

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
