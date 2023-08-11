import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { IFlexProps } from './utils/types'

export namespace S {
  export const Root = styled.div<IFlexProps>`
  position: relative;
  display: flex;
  align-items: center;

  ${({ spaceBetween }) =>
    spaceBetween &&
    css`
      justify-content: space-between;
    `}

  ${({ alignTop }) =>
    alignTop &&
    css`
      align-items: flex-start;
    `}

  ${({ flexEnd }) =>
    flexEnd &&
    css`
      justify-content: flex-end;
    `}

  ${({ noHeight }) =>
    noHeight &&
    css`
      height: 0;
    `}

  ${({ fullHeight }) =>
    fullHeight &&
    css`
      flex: 1 1 auto;
    `}
`
}
