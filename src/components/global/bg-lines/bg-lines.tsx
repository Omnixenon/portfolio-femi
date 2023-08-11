import { faker } from '@faker-js/faker'
import { useMediaQuery } from '@helpers/hooks/useMediaQuery'
import { S } from './bg-lines.styles'

export const BGLines = () => {
  const media = useMediaQuery('xs')
  const lines = Array(media ? 7 : 3).fill(undefined)

  return (
    <S.Root>
      {lines.map(() => {
        const duration = `${faker.datatype.number({ min: 6, max: 10 })}s`
        const delay = `${faker.datatype.number({
          min: 1,
          max: 4,
          precision: 0.1
        })}s`

        return (
          <S.Line
            key={faker.datatype.uuid()}
            animationDuration={duration}
            animationDelay={delay}
          />
        )
      })}
    </S.Root>
  )
}
