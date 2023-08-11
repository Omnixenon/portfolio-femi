import styled from '@emotion/styled'
import { motion } from 'framer-motion'

export namespace S {
  export const Root = styled(motion.div)`
    position: relative;
    padding-bottom: 107px;

    ${({ theme }) => theme.funcs.media('xs')} {
      padding-bottom: 210px;
    }
  `

  export const Content = styled.h2`
    font-weight: 400;
    font-size: 1.5rem;
    margin-left: 0px;
    color: ${({ theme }) => theme.colors.text};

    ${({ theme }) => theme.funcs.media('xs')} {
      width: 53%;
      font-size: 2.6rem;
      margin-left: 124px;
      line-height: 1.25;
    }
  `
}
