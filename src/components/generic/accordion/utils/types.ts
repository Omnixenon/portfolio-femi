export type IAccordionData = {
  id: number
  title: string
  results: Array<string>
}[]

type IBase = {
  /** Data to pass on to accordion */
  data: IAccordionData
}

export interface IAccordionProps extends IBase {}
