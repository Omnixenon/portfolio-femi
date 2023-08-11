import { IAccordionProps } from '@components/generic/accordion/utils/types'

type IBase = {
  data: Unpacked<IAccordionProps['data']>
  activeItem: number
  setActiveItem: Function
}

export interface IAccordionContentProps extends IBase {}
