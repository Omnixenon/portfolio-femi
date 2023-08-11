import styled from '@emotion/styled'
import { motion } from 'framer-motion'

export namespace S {
  export const Root = styled(motion.div)`
    position: relative;
    padding-bottom: 107px;

    ${({ theme }) => theme.funcs.media('xs')} {
      padding-bottom: 210px;
    }

    padding: 0px 20px;
  `

  export const ContentRoot = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 32px;
    margin-left: 0px;
    color: ${({ theme }) => theme.colors.text};

    ${({ theme }) => theme.funcs.media('xs')} {
      margin-left: 124px;
      grid-template-columns: repeat(5, 1fr);
    }
  `

  export const Content = styled.div`
    display: flex;
    flex-direction: column;
  `

  export const Title = styled.h5`
    font-weight: 900;
    font-size: 1.125rem;
    margin: 0;
    text-transform: capitalize;
    font-family: ${({ theme }) => theme.fonts.fontFamily.header};
  `

  export const Subtitle = styled.p`
    font-weight: 300;
    margin: 0;
    text-transform: capitalize;
  `
}
