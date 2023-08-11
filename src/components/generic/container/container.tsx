import { S } from './container.styles'
import { IContainerProps } from './utils/types'

export const Container = ({
  fluid,
  sectionOffset,
  ...props
}: IContainerProps) => {
  return (
    <S.Root {...props} data-fluid={fluid} data-section-offset={sectionOffset} />
  )
}
