import { Container } from '@components/generic/container'
import { useMediaQuery } from '@helpers/hooks/useMediaQuery'
import { ProjectHeader } from './components/header'
import { ProjectHeadline } from './components/headline'
import { useHeadlineProject } from './hooks/useHeadlineProject'
import { S } from './project.styles'

export const Project = () => {
  const { ref, appProps, variant, featuredProps, project } =
    useHeadlineProject()
  const matches = useMediaQuery('xs')

  return (
    <S.Root ref={ref} {...variant} {...appProps}>
      <Container {...(!matches && { fluid: true })}>
        <S.NavLink href={project?.url ?? '#'} target='_blank'>
          <S.Content {...featuredProps}>
            <ProjectHeader />
            <ProjectHeadline />
          </S.Content>

          <S.MediaRoot>
            <S.Image src={project?.menu.media} />
          </S.MediaRoot>
        </S.NavLink>
      </Container>
    </S.Root>
  )
}
