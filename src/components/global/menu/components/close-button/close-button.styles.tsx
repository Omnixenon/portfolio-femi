import isPropValid from '@emotion/is-prop-valid'
import styled from '@emotion/styled'
import { motion } from 'framer-motion'

export namespace S {
  export const Root = styled(motion.div, {
    shouldForwardProp: (prop) => prop !== 'enterCallback' && isPropValid(prop)
  })``

  export const CloseButton = styled.button`
    width: 66px;
    height: 63px;
    transform-origin: center;
    border: none;
    padding: 20px;
    background: none;
    outline: none;
    position: relative;

    ${({ theme }) => theme.funcs.media('xs')} {
      width: 75px;
    }

    &:before,
    &:after {
      content: '';
      position: absolute;
      top: 50%;
      width: 26px;
      height: 5px;
      transform: translateY(-50%);
      display: block;
      background: ${({ theme }) => theme.colors.background};

      ${({ theme }) => theme.funcs.media('xs')} {
        width: 35px;
        height: 7px;
      }
    }

    &:before {
      transform: translateY(-50%) rotate(45deg);
    }

    &:after {
      transform: translateY(-50%) rotate(-45deg);
    }
  `

  export const CloseContent = styled(motion.span)`
    display: none;
    position: absolute;
    top: 50%;
    right: 90px;
    transform: translateY(-56%);
    opacity: 0;
    will-change: opacity;
    pointer-events: none;
    margin: 0;
    font-size: 1.8rem;
    line-height: 1.15;
    font-family: ${({ theme }) => theme.fonts.fontFamily.header};
    font-weight: 700;
    letter-spacing: 0.07rem;
    color: ${({ theme }) => theme.colors.background};
    transition: opacity 200ms cubic-bezier(0.4, 0, 0.2, 1);

    ${({ theme }) => theme.funcs.media('xs')} {
      display: block;

      &[data-visible='true'] {
        opacity: 1;
        pointer-events: none;
      }
    }
  `
}
