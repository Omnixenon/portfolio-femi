import { Container } from '@components/generic/container'
import { FeaturedProjectsAllProjects } from './components/all-projects'
import { FeaturedProjectsHeader } from './components/header'
import { FeaturedProjectsHeadline } from './components/headline'
import { S } from './featured-projects.styles'
import { useFeaturedProject } from './hooks/useFeaturedProject'

export const FeaturedProjects = () => {
  const {
    ref,
    appProps,
    variant,
    hovered,
    featuredProps,
    hoverProps,
    featuredProject
  } = useFeaturedProject()

  return (
    <S.Root ref={ref} {...variant} {...appProps}>
      <Container>
        <S.NavLink href={`/projects/${featuredProject?.id}`}>
          <S.Content {...hoverProps} {...featuredProps}>
            <FeaturedProjectsHeader hovered={hovered} />
            <FeaturedProjectsHeadline hovered={hovered} />
          </S.Content>

          <S.MediaRoot>
            <S.Image src={featuredProject?.menu.media} />
          </S.MediaRoot>
        </S.NavLink>
      </Container>

      <FeaturedProjectsAllProjects />
    </S.Root>
  )
}
