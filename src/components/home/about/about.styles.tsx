import { Flex } from '@components/generic/flex'
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

  export const Wrapper = styled(Flex)`
    flex-wrap: wrap;

    ${({ theme }) => theme.funcs.media('xs')} {
      flex-wrap: nowrap;
    }
  `
}
