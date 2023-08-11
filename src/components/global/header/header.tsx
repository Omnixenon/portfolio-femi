import { Container } from '@components/generic/container'
import { Flex } from '@components/generic/flex'
import { useAnimation } from '@helpers/hooks/useAnimation'
import { Logo } from './components/logo'
import { MenuButton } from './components/menu-button'
import { S } from './header.styles'
import { FadeInDown } from './utils/variants'

export const Header = () => {
  const [variant, headerProps] = useAnimation('HEADER_FADE_IN_DOWN', {
    variant: FadeInDown
  })

  return (
    <S.Root {...variant()} {...headerProps}>
      <Container>
        <Flex spaceBetween noHeight>
          <Logo />
          <MenuButton />
        </Flex>
      </Container>
    </S.Root>
  )
}
