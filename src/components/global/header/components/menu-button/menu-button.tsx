import { useMenuButton } from './hooks/useMenuButton'
import { S } from './menu-button.styles'
import { IMenuButtonProps } from './utils/types'

export const MenuButton = ({ nav }: IMenuButtonProps) => {
  const { refs, cursorLockedProps, reveal, revealProps, setOpenMenu } =
    useMenuButton()

  return (
    <S.Root
      ref={refs.ref(0)}
      {...cursorLockedProps[0]}
      {...revealProps}
      onClick={setOpenMenu}
    >
      <S.MenuButton>
        <S.MenuContent data-visible={reveal}>
          {nav ? 'Close' : 'Projects'}
        </S.MenuContent>
      </S.MenuButton>
    </S.Root>
  )
}
