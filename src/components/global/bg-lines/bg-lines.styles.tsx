import { keyframes } from '@emotion/react'
import styled from '@emotion/styled'
import { rgba } from 'polished'

const drop = keyframes`
  0% {
    top: -50%;
  }
  100% {
    top: 110%;
  }
`

export namespace S {
  export const Root = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 100%;
    margin: auto;
    width: 100vw;
    display: flex;
    justify-content: space-around;
    z-index: 0;
  `

  export const Line = styled.div<{
    animationDelay: string
    animationDuration: string
  }>`
    width: 1px;
    height: 100%;
    background: ${({ theme }) => rgba(theme.colors.text, 0.1)};
    overflow: hidden;
    position: relative;

    &:after {
      content: '';
      display: block;
      position: absolute;
      height: 15vh;
      width: 100%;
      top: -50%;
      left: 0;
      background: ${({ theme }) => `linear-gradient(
        to bottom,
        ${rgba(theme.colors.text, 1)} 0%,
        ${rgba(theme.colors.text, 1)} 75%,
        ${rgba(theme.colors.text, 1)} 100%
      )`};
      animation: ${drop} ${({ animationDuration }) => animationDuration} 0s
        infinite;
      animation-fill-mode: forwards;
      animation-timing-function: cubic-bezier(0.4, 0.26, 0, 0.97);
      animation-delay: ${({ animationDelay }) => animationDelay};
    }
  `
}
