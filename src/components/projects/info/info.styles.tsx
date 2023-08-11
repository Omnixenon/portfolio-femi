import styled from '@emotion/styled'
import { motion } from 'framer-motion'

export namespace S {
  export const Root = styled(motion.div)`
    position: relative;
    margin-bottom: 50px;
    padding: 0px 20px;

    ${({ theme }) => theme.funcs.media('xs')} {
      margin-bottom: 100px;
    }
  `

  export const Content = styled.p`
    font-weight: 300;
    font-size: 1.125rem;
    margin-left: 0px;
    color: ${({ theme }) => theme.colors.text};
    max-width: 440px;

    ${({ theme }) => theme.funcs.media('xs')} {
      margin-left: 124px;
    }
  `
}
