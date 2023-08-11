import {
  ANIMATE_LABEL,
  ANIMATION_EASING,
  EXIT_LABEL,
  INITIAL_LABEL
} from '@styles/animations/constants'
import { CSSProperties } from 'react'

const commonProps = {
  initial: INITIAL_LABEL,
  animate: ANIMATE_LABEL,
  exit: EXIT_LABEL
}

export const EnlargeArrow = (x: CSSProperties['width']) => ({
  ...commonProps,
  variants: {
    [ANIMATE_LABEL]: {
      x,
      transition: { duration: 0.6, ease: ANIMATION_EASING }
    }
  }
})

export const RevealText = (opacity: CSSProperties['opacity']) => ({
  ...commonProps,
  variants: {
    [ANIMATE_LABEL]: {
      opacity,
      transition: { duration: 0.6, ease: ANIMATION_EASING }
    }
  }
})
