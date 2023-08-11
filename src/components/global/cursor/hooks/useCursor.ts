import { useCursorStyles, useCursorType } from '@app/cursor'
import { useMenuRevealed } from '@app/menu'
import { useEffect, useState } from 'react'

export const useCursor = () => {
  const [position, setPosition] = useState({
    x: -10,
    y: -10
  })
  const type = useCursorType()
  const styles = useCursorStyles()
  const isMenuOpen = useMenuRevealed()

  const handleCursorPosition = (event: MouseEvent) => {
    const { pageX: x, pageY: y } = event
    setPosition({ x, y })
  }

  useEffect(() => {
    //@ts-ignore
    document.addEventListener('mousemove', handleCursorPosition)

    return () => {
      //@ts-ignore
      document.removeEventListener('mousemove', handleCursorPosition)
    }
  }, [])

  return {
    position,
    type,
    styles,
    isMenuOpen
  }
}
