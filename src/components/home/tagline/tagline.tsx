import { useUserHeroData } from '@app/data'
import { Container } from '@components/generic/container'
import { useAnimationInView } from '@helpers/hooks/useAnimationInView'
import { RevealContent } from '@styles/animations/variants'
import { S } from './tagline.styles'

export const Tagline = () => {
  const { tagline } = useUserHeroData()
  const { ref, variant, appProps } = useAnimationInView({
    key: 'TAGLINE_REVEAL_CONTENT',
    variant: RevealContent
  })

  return (
    <S.Root ref={ref} {...variant} {...appProps}>
      <Container>
        <S.Content>{tagline}</S.Content>
      </Container>
    </S.Root>
  )
}
