import { useProjectsActiveProject } from '@app/projects'
import { Flex } from '@components/generic/flex'
import { S } from './header.styles'

export const ProjectHeader = () => {
  const project = useProjectsActiveProject()

  return (
    <S.Root>
      <Flex spaceBetween>
        <S.Headline>{project?.meta.genre}</S.Headline>
      </Flex>
    </S.Root>
  )
}
