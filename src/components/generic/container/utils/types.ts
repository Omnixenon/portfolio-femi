import React from 'react'

type IBase = {
  /** Content to render */
  children: React.ReactNode

  /** Change max-width to 100% */
  fluid?: boolean

  /** Section margin bottom */
  sectionOffset?: boolean
}

export interface IContainerProps extends IBase {}
