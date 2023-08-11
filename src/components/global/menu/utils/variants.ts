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

export const RevealMenu = (showMenu: boolean) => ({
  ...commonProps,
  variants: {
    [INITIAL_LABEL]: { x: '-100%' },
    [ANIMATE_LABEL]: {
      x: showMenu ? 0 : '-100%'
    },
    [EXIT_LABEL]: { x: '-100%' }
  },
  transition: { duration: 0.8, ease: ANIMATION_EASING }
})

export const SlideArrow = () => ({
  ...commonProps,
  whileHover: { x: -40, transition: { duration: 0.4, ease: ANIMATION_EASING } },
  variants: {
    [INITIAL_LABEL]: { x: -108 }
  }
})

export const RevealMedia = (width: CSSProperties['width']) => ({
  ...commonProps,
  variants: {
    [ANIMATE_LABEL]: {
      width,
      transition: { duration: 0.6, ease: ANIMATION_EASING }
    }
  }
})

export const LinkHover = (start: () => void, end: () => void) => ({
  ...commonProps,
  onHoverStart: start,
  onHoverEnd: end
})

export const ExitMedia = () => ({
  ...commonProps,
  variants: {
    [INITIAL_LABEL]: { opacity: 0 },
    [ANIMATE_LABEL]: { opacity: 1 },
    [EXIT_LABEL]: { opacity: 0 }
  },
  transition: {
    duration: 0.2,
    ease: ANIMATION_EASING
  }
})
