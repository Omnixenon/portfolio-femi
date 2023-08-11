import { useProjectsActiveProject } from '@app/projects'
import { Container } from '@components/generic/container'
import { useAnimationInView } from '@helpers/hooks/useAnimationInView'
import { RevealContent } from '@styles/animations/variants'
import { S } from './meta.styles'

export const Meta = () => {
  const project = useProjectsActiveProject()
  const { ref, variant, appProps } = useAnimationInView({
    key: 'TAGLINE_REVEAL_CONTENT',
    variant: RevealContent,
    options: { rootMargin: '-100px' }
  })

  if (!project || !project.meta) return null

  return (
    <S.Root ref={ref} {...variant} {...appProps}>
      <Container>
        <S.ContentRoot>
          {Object.keys(project.meta).map((item) => {
            return (
              <S.Content key={item}>
                <S.Title>{item}</S.Title>
                <S.Subtitle>
                  {project.meta[item as keyof typeof project.meta]}
                </S.Subtitle>
              </S.Content>
            )
          })}
        </S.ContentRoot>
      </Container>
    </S.Root>
  )
}
