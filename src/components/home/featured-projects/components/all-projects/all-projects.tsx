import { useMenuActions } from '@app/menu'
import { Container } from '@components/generic/container'
import { Flex } from '@components/generic/flex'
import { useCursorEvent } from '@helpers/hooks/useCursorEvent'
import { useMediaQuery } from '@helpers/hooks/useMediaQuery'
import { S } from './all-projects.styles'

export const FeaturedProjectsAllProjects = () => {
  const matches = useMediaQuery('xs')
  const [projectsProp] = useCursorEvent({ enterState: ['pointer'] })
  const { setCloseMenu } = useMenuActions()

  return (
    <S.Root>
      <Container>
        <Flex {...(matches && { flexEnd: true })}>
          <S.Button {...projectsProp} onClick={setCloseMenu}>
            <S.Content>All Projects</S.Content>
          </S.Button>
        </Flex>
      </Container>
    </S.Root>
  )
}
