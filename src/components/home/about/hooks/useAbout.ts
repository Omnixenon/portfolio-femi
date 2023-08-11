import { useAnimationInView } from '@helpers/hooks/useAnimationInView'
import { RevealContent } from '@styles/animations/variants'

export const useAbout = () => {
  const { ref, variant, appProps } = useAnimationInView({
    key: 'FEATURED_REVEAL_CONTENT',
    variant: RevealContent
  })

  return {
    ref,
    variant,
    appProps
  }
}
