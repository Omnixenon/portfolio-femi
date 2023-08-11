import React from 'react'

type IBase = {
  /** Content to render */
  children: React.ReactNode

  /** Center content */
  center?: boolean

  /** Split content */
  spaceBetween?: boolean

  /** Push content to end */
  flexEnd?: boolean

  /** Align content with top of parent */
  alignTop?: boolean

  /** Remove height property */
  noHeight?: boolean

  /** Take up remaining height */
  fullHeight?: boolean
}

export interface IFlexProps extends IBase {}
