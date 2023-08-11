import styled from '@emotion/styled'
import { motion } from 'framer-motion'

export namespace S {
  export const Root = styled(motion.div)`
    padding-left: 20px;

    a {
      font-size: 1.4rem;
      font-weight: 800;
      color: ${({ theme }) => theme.colors.text};

      ${({ theme }) => theme.funcs.media('xs')} {
        font-size: 1.8rem;
      }
    }

    ${({ theme }) => theme.funcs.media('xs')} {
      padding-left: 0;
    }
  `

  export const Separator = styled(motion.span)`
    background: ${({ theme }) => theme.colors.primary};
    margin: 0 4px;
    border-radius: 100%;
    display: inline-block;
    position: relative;
    height: 1rem;
    width: 1rem;
    bottom: 1px;

    ${({ theme }) => theme.funcs.media('xs')} {
      bottom: 2px;
    }
  `
}
