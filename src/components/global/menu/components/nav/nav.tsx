import { useMediaQuery } from '@helpers/hooks/useMediaQuery'
import Link from 'next/link'
import { LinkHover } from '../../utils/variants'
import { useNav } from './hooks/useNav'
import { S } from './nav.styles'

export const MenuNav = () => {
  const {
    projects,
    navProps,
    contentProps,
    variant,
    handleEnter,
    handleLeave
  } = useNav()
  const matches = useMediaQuery('xs')

  return (
    <S.Root>
      <S.List>
        {projects.map(({ id, menu, name }) => {
          return (
            <S.Item
              key={id}
              {...navProps}
              {...LinkHover(
                handleEnter({ id, media: menu.media }),
                handleLeave
              )}
            >
              <Link href={`/projects/${id}`}>
                <S.Content {...(matches && variant())} {...contentProps}>
                  <S.PointerRoot>
                    <S.Pointer />
                  </S.PointerRoot>

                  <S.TitleRoot>
                    <S.Title>{name.join(' ')}</S.Title>
                  </S.TitleRoot>
                </S.Content>
              </Link>
            </S.Item>
          )
        })}
      </S.List>
    </S.Root>
  )
}
