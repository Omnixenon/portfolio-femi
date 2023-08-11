import { HEADER_TOP_OFFSET } from '@constants/header'
import styled from '@emotion/styled'
import { motion } from 'framer-motion'

export namespace S {
  export const Root = styled(motion.div)`
    height: 0px;
    width: 100%;
    position: absolute;
    top: ${HEADER_TOP_OFFSET / 1.7}px;
    right: 0;
    left: 0;
    z-index: 99;
    margin-top: -6px;

    ${({ theme }) => theme.funcs.media('xs')} {
      top: ${HEADER_TOP_OFFSET}px;
    }
  `
}
