import { Container } from '@components/generic/container'
import { S } from './about.styles'
import { AboutContent } from './components/content'
import { AboutServices } from './components/services'
import { useAbout } from './hooks/useAbout'

export const About = () => {
  const { ref, appProps, variant } = useAbout()

  return (
    <S.Root ref={ref} {...variant} {...appProps}>
      <Container>
        <S.Wrapper alignTop>
          <AboutContent />
          <AboutServices />
        </S.Wrapper>
      </Container>
    </S.Root>
  )
}
