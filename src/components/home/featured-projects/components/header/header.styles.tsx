import styled from '@emotion/styled'
import { motion } from 'framer-motion'

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

  export const MetaRoot = styled(motion.div)`
    display: none;

    ${({ theme }) => theme.funcs.media('xs')} {
      display: flex;
    }
  `

  export const MetaTitle = styled.h4`
    text-transform: capitalize;
    color: ${({ theme }) => theme.colors.text};
    mix-blend-mode: difference;

    &:last-child {
      margin-left: 1rem;
    }
  `
}
