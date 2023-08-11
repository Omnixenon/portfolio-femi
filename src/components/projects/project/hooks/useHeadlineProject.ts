import { useProjectsActiveProject } from '@app/projects'
import { useAnimationInView } from '@helpers/hooks/useAnimationInView'
import { useCursorEvent } from '@helpers/hooks/useCursorEvent'
import { RevealContent } from '@styles/animations/variants'

export const useHeadlineProject = () => {
  const { ref, variant, appProps } = useAnimationInView({
    key: 'FEATURED_REVEAL_CONTENT',
    variant: RevealContent
  })
  const [featuredProps] = useCursorEvent({
    enterState: ['hovered', 'text'],
    enterStyles: { content: 'Click' }
  })
  const project = useProjectsActiveProject()

  return {
    ref,
    variant,
    appProps,
    featuredProps,
    project
  }
}
