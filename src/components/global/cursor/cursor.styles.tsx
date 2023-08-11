import styled from '@emotion/styled'

export namespace S {
  export const Root = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 32px;
    height: 32px;
    background-color: ${({ theme }) => theme.colors.primary};
    border-radius: 100%;
    transform: translate(-50%, -50%);
    transition: all 100ms ease-in-out;
    transition-property: width, height, border;
    will-change: width, height, transform, border;
    pointer-events: none;
    z-index: 999;

    &::before {
      content: '';
      position: absolute;
      right: 130%;
      top: 50%;
      transform: translateY(-50%);
      color: ${({ theme }) => theme.colors.primary};
      font-family: ${({ theme }) => theme.fonts.fontFamily.header};
      font-size: 24px;
      font-weight: 700;
    }

    @media (pointer: coarse), (pointer: none) {
      display: none;
    }

    &[data-hovered='true'] {
      background-color: transparent !important;
      width: 56px;
      height: 56px;
      border: 4px solid;
      border-color: ${({ theme }) => theme.colors.primary};
    }

    &[data-pointer='true'] {
      border-color: ${({ theme }) => theme.colors.text} !important;
    }

    &[data-locked='true'] {
      border-color: ${({ theme }) => theme.colors.primary};

      &[data-menu-revealed='true'] {
        border-color: ${({ theme }) => theme.colors.text} !important;
      }
    }

    &[data-menu-revealed='true'] {
      background-color: ${({ theme }) => theme.colors.text};
    }

    &[data-text='true'] {
      color: green;

      &::before {
        content: ${({ style }) => `'${style?.content}'`};
      }
    }
  `
}
