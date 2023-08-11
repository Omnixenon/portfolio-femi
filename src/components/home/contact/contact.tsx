import { Container } from '@components/generic/container'
import { SOCIAL_ICONS_MAP } from '@constants/social-icons'
import Link from 'next/link'
import { S } from './contact.styles'
import { useContact } from './hooks/useContact'

export const Contact = () => {
  const {
    appProps,
    ref,
    socials,
    variant,
    emailProps,
    phoneProps,
    cursorLockedProps,
    refs,
    theme
  } = useContact()

  return (
    <S.Root ref={ref} {...variant} {...appProps}>
      <Container>
        <S.Wrapper spaceBetween>
          <S.SectionRoot>
            <S.Section>
              <Link href={`tel:${socials.phone}`} {...phoneProps}>
                {socials.phone}
              </Link>
            </S.Section>
            <S.Section>
              <Link href={`mailto:${socials.email}`} {...emailProps}>
                {socials.email}
              </Link>
            </S.Section>
          </S.SectionRoot>

          <S.SectionRoot>
            <S.Section>Manchester</S.Section>
            <S.Section>United Kingdom</S.Section>
          </S.SectionRoot>

          <S.SectionRoot data-socials>
            {Object.keys(socials.links).map((item, index) => {
              return (
                <S.Socials
                  href={socials.links[item as keyof typeof socials.links]}
                  target='_blank'
                  key={item}
                  ref={refs.ref(index)}
                  {...cursorLockedProps[index]}
                  whileHover={{
                    color: theme.colors.text,
                    transition: { duration: 0.1 }
                  }}
                >
                  {SOCIAL_ICONS_MAP[item as keyof typeof SOCIAL_ICONS_MAP]}
                </S.Socials>
              )
            })}
          </S.SectionRoot>
        </S.Wrapper>
      </Container>
    </S.Root>
  )
}
