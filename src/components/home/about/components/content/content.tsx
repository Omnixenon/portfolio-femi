import { useUserAboutData } from '@app/data'
import { S } from './content.styles'

export const AboutContent = () => {
  const { content, headline } = useUserAboutData()

  return (
    <S.Root>
      <S.Title>{headline}</S.Title>
      <S.Content>{content}</S.Content>
    </S.Root>
  )
}
