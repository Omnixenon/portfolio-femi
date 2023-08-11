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

export const CollapseItem = (height: CSSProperties['height']) => ({
  ...commonProps,
  variants: {
    [ANIMATE_LABEL]: {
      height,
      transition: { duration: 0.6, ease: ANIMATION_EASING }
    }
  }
})

export const RotateIcon = (rotate: number, x: number) => ({
  ...commonProps,
  variants: {
    [ANIMATE_LABEL]: {
      rotate,
      x,
      transition: { duration: 0.2, ease: ANIMATION_EASING }
    }
  }
})
