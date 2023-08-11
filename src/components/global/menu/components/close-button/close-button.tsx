import { S } from './close-button.styles'
import { useCloseButton } from './hooks/useCloseButton'

export const CloseButton = () => {
  const { refs, cursorLockedProps, reveal, revealProps, setCloseMenu } =
    useCloseButton()

  return (
    <S.Root
      ref={refs.ref(0)}
      {...cursorLockedProps[0]}
      {...revealProps}
      onClick={setCloseMenu}
    >
      <S.CloseButton>
        <S.CloseContent data-visible={reveal}>Close</S.CloseContent>
      </S.CloseButton>
    </S.Root>
  )
}
