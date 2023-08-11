import { Arrow } from '@components/global/arrow'
import styled from '@emotion/styled'
import { motion } from 'framer-motion'

export namespace S {
  export const Root = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
  `

  export const List = styled.ul`
    padding: 0;
  `

  export const Item = styled(motion.li)`
    list-style: none;
    font-size: 1.5rem;
    text-transform: uppercase;
    font-weight: 900;
    overflow: hidden;
    height: 50px;

    ${({ theme }) => theme.funcs.media('xs')} {
      font-size: 3rem;
      height: 96px;
      line-height: 96px;
    }
  `

  export const Content = styled(motion.div)`
    position: relative;
    display: flex;
    align-items: center;

    color: ${({ theme }) => theme.colors.primary};
    mix-blend-mode: difference;
  `

  export const PointerRoot = styled.span`
    display: none;
    height: 105px;
    margin-right: 8px;

    ${({ theme }) => theme.funcs.media('xs')} {
      display: block;
    }
  `

  export const Pointer = styled(Arrow)`
    width: 100px;
    background-color: ${({ theme }) => theme.colors.primary};

    path {
      fill: ${({ theme }) => theme.colors.background};
    }
  `

  export const TitleRoot = styled.div``

  export const Title = styled.div``
}
