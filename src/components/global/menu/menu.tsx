import { Container } from '@components/generic/container'
import { AnimatePresence } from 'framer-motion'
import { Footer } from './components/footer'
import { MenuHeader } from './components/header'
import { MenuMedia } from './components/media'
import { MenuNav } from './components/nav'
import { useMenu } from './hooks/useMenu'
import { S } from './menu.styles'

export const Menu = () => {
  const { isMenuOpen, menuProps, menuVariant } = useMenu()

  return (
    <AnimatePresence>
      {isMenuOpen && (
        <S.Root {...menuVariant(isMenuOpen)} {...menuProps}>
          <Container>
            <MenuHeader />
            <MenuNav />
            <Footer />
          </Container>
          <MenuMedia />
        </S.Root>
      )}
    </AnimatePresence>
  )
}
