import styled from '@emotion/styled'
import { motion } from 'framer-motion'

export const Root = styled.div``

export const Header = styled(motion.div)`
  width: 100%;
  color: ${({ theme }) => theme.colors.primary};
  height: 32px;
  display: flex;
  align-items: center;
  font-weight: 600;
  font-size: 1.15rem;
  margin: 8px 0;
  font-family: ${({ theme }) => theme.fonts.fontFamily.header};
`

export const IconRoot = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  margin-right: 8px;
`

export const Icon = styled(motion.span)`
  width: 16px;
  height: 4px;
  background-color: ${({ theme }) => theme.colors.primary};
  transition: 100ms ease-in-out;
`

export const ContentRoot = styled(motion.div)`
  overflow: hidden;
  padding-left: 40px;
`

export const Content = styled.span`
  width: 100%;
  margin: 8px 0;
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.primary};
  display: block;
  font-weight: 300;
`
