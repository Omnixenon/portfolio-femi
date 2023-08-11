import { Arrow } from '@components/global/arrow'
import styled from '@emotion/styled'

export namespace S {
  export const Root = styled.div`
    position: absolute;
    bottom: -110px;
    font-size: 2.5rem;
    line-height: 0.81;
    font-weight: 900;
    margin: 0;
    text-transform: uppercase;

    ${({ theme }) => theme.funcs.media('xs')} {
      line-height: 90px;
      font-size: 7rem;
      bottom: -128px;
    }
  `

  export const PointerRoot = styled.span`
    width: 120px;
    height: 80px;
    display: block;
    position: relative;
    overflow: hidden;
    margin-right: 8px;
  `

  export const Pointer = styled(Arrow)`
    position: absolute;
    top: 16px;
    left: -18px;
    width: 50px;

    ${({ theme }) => theme.funcs.media('xs')} {
      width: 108px;
      left: -48px;
    }

    path {
      fill: ${({ theme }) => theme.colors.text};
    }
  `
}
