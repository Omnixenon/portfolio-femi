import styled from '@emotion/styled'
import { motion } from 'framer-motion'

export namespace S {
  export const Root = styled.div`
    position: absolute;
    top: 0;
    left: 37%;
    z-index: -1;
    height: 100%;
    width: 100%;
    background-color: ${({ theme }) => theme.colors.background};
  `

  export const Reveal = styled(motion.div)`
    width: 100%;
    background: ${({ theme }) => theme.colors.primary};
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
  `

  export const Media = styled.div`
    background: #000;
    position: absolute;
    height: 100%;
    margin: 0;
    z-index: -1;

    video {
      height: 100%;
    }
  `

  export const Image = styled(motion.img)`
    width: 100%;
    height: 100%;
    object-fit: cover;
  `
}
