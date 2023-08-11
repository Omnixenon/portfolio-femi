import styled from '@emotion/styled'

export namespace S {
  export const Root = styled.div`
    font-family: ${({ theme }) => theme.fonts.fontFamily.header};
    letter-spacing: 0.07rem;
  `

  export const Headline = styled.h3`
    font-size: 1rem;
    color: ${({ theme }) => theme.colors.text};
    mix-blend-mode: difference;
    text-transform: capitalize;

    ${({ theme }) => theme.funcs.media('xs')} {
      font-size: 1.4rem;
    }
  `
}
