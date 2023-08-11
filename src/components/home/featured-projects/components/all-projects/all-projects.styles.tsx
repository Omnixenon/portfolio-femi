import styled from '@emotion/styled'

export namespace S {
  export const Root = styled.div`
    ${({ theme }) => theme.funcs.media('xs')} {
      margin-top: 200px;
    }
  `

  export const Button = styled.button`
    background-color: ${({ theme }) => theme.colors.primary};
    color: #fff;
    position: relative;
    padding: 20px;
    display: block;
    text-align: left;
    font-size: 1.125rem;
    line-height: 1;
    font-weight: 600;
    border: none;
    font-family: ${({ theme }) => theme.fonts.fontFamily.header};
    outline: 0;
    border: 0;

    ${({ theme }) => theme.funcs.media('xs')} {
      font-size: 1.4rem;
      line-height: 1;
    }

    &:before,
    &:after {
      content: '';
      position: absolute;
      top: 50%;
      right: 20px;
      width: 26px;
      height: 5px;
      display: block;
      background: #fff;
      transform: translateY(-50%);

      ${({ theme }) => theme.funcs.media('xs')} {
        width: 35px;
        height: 7px;
      }
    }

    &:before {
      margin-top: -6px;

      ${({ theme }) => theme.funcs.media('xs')} {
        margin-top: -8px;
      }
    }

    &:after {
      margin-top: 6px;

      ${({ theme }) => theme.funcs.media('xs')} {
        margin-top: 8px;
      }
    }
  `

  export const Content = styled.span`
    margin-right: 70px;
    display: block;

    ${({ theme }) => theme.funcs.media('xs')} {
      margin-right: 100px;
    }
  `
}
