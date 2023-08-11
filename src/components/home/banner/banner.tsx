import { S } from './banner.styles'
import { useBanner } from './hooks/useBanner'

export const Banner = () => {
  const { headline, parent, children, titleProps } = useBanner()

  return (
    <S.Root>
      <S.Title {...parent} {...titleProps}>
        {headline.map((item) => {
          return (
            <S.HeadLine key={item} {...children}>
              {item}
            </S.HeadLine>
          )
        })}
      </S.Title>
    </S.Root>
  )
}
