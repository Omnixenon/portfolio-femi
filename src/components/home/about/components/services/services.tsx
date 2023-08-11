import { useUserAboutData } from '@app/data'
import { Accordion } from '@components/generic/accordion'
import { S } from './services.styles'

export const AboutServices = () => {
  const { services } = useUserAboutData()

  return (
    <S.Root>
      <S.Title>Services</S.Title>
      <Accordion data={services} />
    </S.Root>
  )
}
