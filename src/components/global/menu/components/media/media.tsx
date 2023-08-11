import { useMediaQuery } from '@helpers/hooks/useMediaQuery'
import { AnimatePresence } from 'framer-motion'
import { useMedia } from './hooks/useMedia'
import { S } from './media.styles'

export const MenuMedia = () => {
  const {
    projects,
    mediaKey,
    mediaPath,
    isMediaOpen,
    inVariant,
    inVariantProps,
    outVariant,
    outVariantProps
  } = useMedia()

  const matches = useMediaQuery('xs')

  return (
    <>
      {matches && (
        <S.Root>
          <S.Reveal
            {...inVariant(isMediaOpen ? 0 : '100%')}
            {...inVariantProps}
          />
          <S.Media>
            <AnimatePresence initial={false} mode='wait'>
              <S.Image
                key={mediaKey}
                src={`${mediaPath}`}
                {...outVariant()}
                {...outVariantProps}
              />
            </AnimatePresence>
          </S.Media>
        </S.Root>
      )}
    </>
  )
}
