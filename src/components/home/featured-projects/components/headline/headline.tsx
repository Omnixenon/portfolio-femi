import { useUserProjectsData } from '@app/data'
import { useAnimation } from '@helpers/hooks/useAnimation'
import { useMediaQuery } from '@helpers/hooks/useMediaQuery'
import { Fragment } from 'react'
import { EnlargeArrow } from '../../utils/variants'
import { S } from './headline.styles'
import { IFeaturedProjectsHeadlineProps } from './utils/types'

export const FeaturedProjectsHeadline = ({
  hovered
}: IFeaturedProjectsHeadlineProps) => {
  const { projects, featuredProject } = useUserProjectsData()
  const project = projects.find(({ id }) => id === featuredProject)
  const [variant, arrowProps] = useAnimation('FEATURED_ENLARGE_ARROW', {
    variant: EnlargeArrow
  })
  const matches = useMediaQuery('xs')

  return (
    <S.Root>
      {project?.name.map((item, index) => {
        if (index === 0) {
          return (
            <Fragment key={item}>
              {item} <br />
            </Fragment>
          )
        }

        return <Fragment key={item}>{item}</Fragment>
      })}
      <S.PointerRoot>
        <S.Pointer
          {...variant(hovered ? (matches ? 48 : 18) : 0)}
          {...arrowProps}
        />
      </S.PointerRoot>
    </S.Root>
  )
}
