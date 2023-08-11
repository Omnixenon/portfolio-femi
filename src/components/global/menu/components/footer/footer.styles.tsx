import { Flex } from '@components/generic/flex'
import isPropValid from '@emotion/is-prop-valid'
import styled from '@emotion/styled'
import { motion } from 'framer-motion'

export namespace S {
  export const Root = styled(motion.div)`
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    padding: 16px;

    ${({ theme }) => theme.funcs.media('xs')} {
      padding: 56px 0;
    }
  `

  export const Wrapper = styled(Flex)`
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;

    ${({ theme }) => theme.funcs.media('xs')} {
      flex-direction: row;
      align-items: center;
      gap: 48px;
    }
  `

  export const SectionRoot = styled.div`
    display: flex;
    flex-direction: column;
    color: ${({ theme }) => theme.colors.background};
    font-family: ${({ theme }) => theme.fonts.fontFamily.header};
    font-size: 0.875rem;
    font-weight: 900;
    flex: 1;

    ${({ theme }) => theme.funcs.media('xxs')} {
      font-size: 1.2rem;
    }

    ${({ theme }) => theme.funcs.media('xs')} {
      font-size: 1.8rem;
    }

    a {
      color: ${({ theme }) => theme.colors.primary};
      mix-blend-mode: difference;
    }

    &[data-socials='true'] {
      flex-direction: row;
      justify-content: flex-end;
    }

    &[data-copyright='true'] {
      font-size: 0.9rem;
      font-weight: 900;
      line-height: 1.6rem;
      text-transform: uppercase;
      color: ${({ theme }) => theme.colors.primary};
      mix-blend-mode: difference;

      ${({ theme }) => theme.funcs.media('xs')} {
        font-size: 1.1rem;
      }
    }
  `

  export const Section = styled.div``

  export const Socials = styled(motion.a, {
    shouldForwardProp: (prop) => prop !== 'enterCallback' && isPropValid(prop)
  })`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 36px;
    height: 36px;
    padding: 8px;

    svg {
      width: 100%;
      height: 100%;
    }
  `
}
