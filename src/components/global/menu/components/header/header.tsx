import { Flex } from '@components/generic/flex'
import { CloseButton } from '../close-button'
import { S } from './header.styles'

export const MenuHeader = () => {
  return (
    <S.Root>
      <Flex spaceBetween noHeight>
        <S.Title>Projects</S.Title>
        <CloseButton />
      </Flex>
    </S.Root>
  )
}
