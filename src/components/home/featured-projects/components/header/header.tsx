import { useUserProjectsData } from '@app/data'
import { Flex } from '@components/generic/flex'
import { useAnimation } from '@helpers/hooks/useAnimation'
import { RevealText } from '../../utils/variants'
import { S } from './header.styles'
import { IFeaturedProjectsHeaderProps } from './utils/types'

export const FeaturedProjectsHeader = ({
  hovered
}: IFeaturedProjectsHeaderProps) => {
  const [variant, metaProps] = useAnimation(
    'FEATURED_METADATA_REVEAL_CONTENT',
    { variant: RevealText }
  )
  const { projects, featuredProject } = useUserProjectsData()
  const project = projects.find(({ id }) => id === featuredProject)

  return (
    <S.Root>
      <Flex spaceBetween>
        <S.Headline>Featured Project</S.Headline>
        <S.MetaRoot {...variant(hovered ? 1 : 0)} {...metaProps}>
          <S.MetaTitle>{project?.meta.genre}</S.MetaTitle>
          <S.MetaTitle>{project?.meta.year}</S.MetaTitle>
        </S.MetaRoot>
      </Flex>
    </S.Root>
  )
}
