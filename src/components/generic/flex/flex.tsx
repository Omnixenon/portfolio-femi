import { S } from './flex.styles'
import { IFlexProps } from './utils/types'

export const Flex = ({ ...props }: IFlexProps) => {
  return <S.Root {...props} />
}
