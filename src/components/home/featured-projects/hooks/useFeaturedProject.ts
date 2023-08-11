import { useUserProjectsData } from '@app/data'
import { useAnimationInView } from '@helpers/hooks/useAnimationInView'
import { useCursorEvent } from '@helpers/hooks/useCursorEvent'
import { useHovered } from '@helpers/hooks/useHovered'
import { RevealContent } from '@styles/animations/variants'

export const useFeaturedProject = () => {
  const { projects, featuredProject } = useUserProjectsData()
  const { ref, variant, appProps } = useAnimationInView({
    key: 'FEATURED_REVEAL_CONTENT',
    variant: RevealContent
  })
  const [hovered, hoverProps] = useHovered()
  const [featuredProps] = useCursorEvent({ enterState: ['hovered'] })

  return {
    ref,
    variant,
    appProps,
    featuredProps,
    hovered,
    hoverProps,
    featuredProject: projects.find(({ id }) => id === featuredProject)
  }
}
