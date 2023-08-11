import { useUserHeroData } from '@app/data'
import { useAnimation } from '@helpers/hooks/useAnimation'
import { StaggeredSlideUp } from '@styles/animations/variants'

export const useBanner = () => {
  const { headline } = useUserHeroData()
  const [variant, titleProps] = useAnimation('BANNER_TITLE_SLIDE_IN', {
    variant: StaggeredSlideUp
  })
  const [parent, children] = variant()

  return {
    headline,
    parent,
    children,
    titleProps
  }
}
