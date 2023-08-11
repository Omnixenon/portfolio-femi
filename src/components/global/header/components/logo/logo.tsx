import { HEADER_SEPARATOR_KEY } from '@constants/header'
import Link from 'next/link'
import { useLogo } from './hooks/useLogo'
import { S } from './logo.styles'

export const Logo = () => {
  const { logo, logoProps, ballProps, toggleTheme } = useLogo()

  return (
    <S.Root {...logoProps}>
      {logo.map((item) => {
        if (item === HEADER_SEPARATOR_KEY) {
          return <S.Separator key={item} {...ballProps} onClick={toggleTheme} />
        }

        return (
          <Link key={item} href='/'>
            {item.toUpperCase()}
          </Link>
        )
      })}
    </S.Root>
  )
}
