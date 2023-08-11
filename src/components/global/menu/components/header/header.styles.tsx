import { HEADER_TOP_OFFSET } from '@constants/header'
import styled from '@emotion/styled'
import { motion } from 'framer-motion'

export namespace S {
  export const Root = styled(motion.div)`
    position: relative;
    top: ${HEADER_TOP_OFFSET / 1.7}px;
    margin-top: -6px;

    ${({ theme }) => theme.funcs.media('xs')} {
      top: ${HEADER_TOP_OFFSET}px;
    }
  `

  export const Title = styled.h2`
    color: ${({ theme }) => theme.colors.background};
    font-family: ${({ theme }) => theme.fonts.fontFamily.header};
    font-size: 1.3rem;

    ${({ theme }) => theme.funcs.media('xs')} {
      font-size: 1.5rem;
    }
  `
}
