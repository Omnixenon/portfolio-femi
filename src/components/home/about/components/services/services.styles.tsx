import styled from '@emotion/styled'

export namespace S {
  export const Root = styled.div`
    margin-top: 86px;

    ${({ theme }) => theme.funcs.media('xs')} {
      margin-top: 15px;
    }
  `

  export const Title = styled.h3`
    font-family: ${({ theme }) => theme.fonts.fontFamily.header};
  `
}
