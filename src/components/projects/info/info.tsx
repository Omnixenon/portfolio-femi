import { useProjectsActiveProject } from '@app/projects'
import { Container } from '@components/generic/container'
import { useAnimationInView } from '@helpers/hooks/useAnimationInView'
import { RevealContent } from '@styles/animations/variants'
import { S } from './info.styles'

export const Info = () => {
  const activeProject = useProjectsActiveProject()
  const { ref, variant, appProps } = useAnimationInView({
    key: 'TAGLINE_REVEAL_CONTENT',
    variant: RevealContent
  })

  console.log({ activeProject })

  return (
    <S.Root ref={ref} {...variant} {...appProps}>
      <Container>
        {activeProject?.description.map((item, index) => {
          return <S.Content key={index}>{item}</S.Content>
        })}
      </Container>
    </S.Root>
  )
}
