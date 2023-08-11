import styled from '@emotion/styled'
import { motion } from 'framer-motion'

export namespace S {
  export const Root = styled.div`
    position: relative;
    background-color: ${({ theme }) => theme.colors.background};
    height: 100vh;
    width: 100%;
    margin-bottom: 90px;
    z-index: -1;

    ${({ theme }) => theme.funcs.media('xs')} {
      margin-bottom: 296px;
    }
  `

  export const Title = styled(motion.h1)`
    position: absolute;
    bottom: -36px;
    left: -7px;
    color: ${({ theme }) => theme.colors.text};
    pointer-events: none;

    ${({ theme }) => theme.funcs.media('xs')} {
      left: -17px;
      bottom: -140px;
    }
  `

  export const HeadLine = styled(motion.span)`
    display: block;
    font-size: 3.9rem;
    font-weight: 900;
    line-height: 0.8;
    text-transform: uppercase;

    ${({ theme }) => theme.funcs.media('xxs')} {
      font-size: 4.4rem;
    }

    ${({ theme }) => theme.funcs.media('xs')} {
      font-size: 18rem;
    }
  `
}
