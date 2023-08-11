import { Flex } from '@components/generic/flex'
import isPropValid from '@emotion/is-prop-valid'
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
    flex-direction: column;
    align-items: flex-start;
    gap: 48px;

    ${({ theme }) => theme.funcs.media('xs')} {
      flex-direction: row;
      align-items: center;
    }
  `

  export const SectionRoot = styled.div`
    display: flex;
    flex-direction: column;
    color: ${({ theme }) => theme.colors.primary};
    font-family: ${({ theme }) => theme.fonts.fontFamily.header};
    font-size: 1.125rem;
    font-weight: 900;
    flex: 1;

    ${({ theme }) => theme.funcs.media('xxs')} {
      font-size: 1.4rem;
    }

    ${({ theme }) => theme.funcs.media('xs')} {
      font-size: 1.8rem;
    }

    a {
      color: ${({ theme }) => theme.colors.primary};
    }

    &[data-socials='true'] {
      flex-direction: row;
      justify-content: flex-end;
    }
  `

  export const Section = styled.div`
    color: ${({ theme }) => theme.colors.primary};
  `

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
    color: ${({ theme }) => theme.colors.primary};

    svg {
      width: 100%;
      height: 100%;
    }
  `
}
