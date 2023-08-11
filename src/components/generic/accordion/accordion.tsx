import { useState } from 'react'
import * as S from './accordion.styles'
import { Content } from './components/content'
import { IAccordionProps } from './utils/types'

export const Accordion = ({ data }: IAccordionProps) => {
  const [activeItem, setActiveItem] = useState(0)

  return (
    <S.Root>
      {data.map((details, index) => {
        return (
          <Content
            key={`${details.id}${index}`}
            data={details}
            activeItem={activeItem}
            setActiveItem={setActiveItem}
          />
        )
      })}
    </S.Root>
  )
}
