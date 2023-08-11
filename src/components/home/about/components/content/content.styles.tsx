import styled from '@emotion/styled'

export namespace S {
  export const Root = styled.div`
    width: 100%;
  `

  export const Title = styled.h2`
    font-size: 1.5rem;
    font-weight: 400;
    line-height: 32px;
    color: ${({ theme }) => theme.colors.text};

    ${({ theme }) => theme.funcs.media('xs')} {
      width: 60%;
      margin-left: 124px;
      font-size: 2.1rem;
      line-height: 42px;
    }
  `

  export const Content = styled.div`
    max-width: 440px;
    font-size: 1rem;
    line-height: 1.6rem;
    color: ${({ theme }) => theme.colors.text};

    ${({ theme }) => theme.funcs.media('xs')} {
      margin-left: 124px;
    }
  `
}
