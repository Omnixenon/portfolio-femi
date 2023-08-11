import Link from 'next/link'
import { SOCIAL_ICONS_MAP } from '../../../../../constants/social-icons'
import { S } from './footer.styles'
import { useFooter } from './hooks/useFooter'

export const Footer = () => {
  const {
    logo,
    socials,
    emailProps,
    phoneProps,
    cursorLockedProps,
    refs,
    theme
  } = useFooter()

  return (
    <S.Root>
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

        <S.SectionRoot data-copyright>
          <S.Section>
            &copy; {logo.join('')} {new Date().getFullYear()}
          </S.Section>
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
                  color: theme.colors.background,
                  transition: { duration: 0.1 }
                }}
              >
                {SOCIAL_ICONS_MAP[item as keyof typeof SOCIAL_ICONS_MAP]}
              </S.Socials>
            )
          })}
        </S.SectionRoot>
      </S.Wrapper>
    </S.Root>
  )
}
