import styled from '@emotion/styled'
import { motion } from 'framer-motion'
import Link from 'next/link'

export namespace S {
  export const Root = styled(motion.div)`
    position: relative;
    padding-bottom: 107px;

    ${({ theme }) => theme.funcs.media('xs')} {
      padding-bottom: 210px;
    }
  `

  export const NavLink = styled(Link)`
    position: relative;
    display: block;
    margin-bottom: 130px;

    ${({ theme }) => theme.funcs.media('xs')} {
      margin-bottom: 200px;
    }
  `

  export const Content = styled(motion.div)`
    height: 190px;
    width: 100%;
    padding: 0px 20px;
    box-sizing: border-box;
    color: ${({ theme }) => theme.colors.text};

    ${({ theme }) => theme.funcs.media('xs')} {
      height: 480px;
      padding: 56px 124px;
    }
  `

  export const MediaRoot = styled.div`
    position: absolute;
    z-index: -1;
    width: 100%;
    height: 190px;
    top: 0;
    display: block;
    overflow: hidden;

    ${({ theme }) => theme.funcs.media('xs')} {
      height: 480px;
    }
  `

  export const Video = styled.video`
    width: 100%;
    height: 100%;
    object-fit: cover;
  `

  export const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
  `
}
