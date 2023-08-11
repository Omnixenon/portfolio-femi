import { S } from './cursor.styles'
import { useCursor } from './hooks/useCursor'

export const Cursor = () => {
  const { position, type, styles, isMenuOpen } = useCursor()

  return (
    <S.Root
      data-hovered={type !== false}
      data-pointer={type !== false && type.includes('pointer')}
      data-locked={type !== false && type.includes('locked')}
      data-text={type !== false && type.includes('text')}
      data-menu-revealed={isMenuOpen}
      style={{ left: `${position.x}px`, top: `${position.y}px`, ...styles }}
    />
  )
}
