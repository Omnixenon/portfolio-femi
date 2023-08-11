import styled from '@emotion/styled'
import { media } from '@theme/funcs/media'

export namespace S {
  export const Root = styled.div`
    flex-grow: 1;
    margin: 0;
    padding: 0 16px;
    position: relative;
    width: auto;
    height: 100%;

    ${({ theme }) => theme.funcs.media('xs')} {
      margin: 0 auto;
      padding: 0 32px;
    }

    @media (min-width: 1024px) {
      max-width: 960px;
    }

    @media (min-width: 1216px) {
      max-width: 1152px;
    }

    @media (min-width: 1408px) {
      max-width: 1244px;
    }

    &[data-fluid] {
      padding: 0;
      margin: 0;
      max-width: 100%;
    }

    &[data-section-offset] {
      padding-bottom: 107px;

      ${media('xs')} {
        padding-bottom: 210px;
      }
    }
  `
}
