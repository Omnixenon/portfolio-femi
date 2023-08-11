import { useCursorActions } from '@app/cursor'
import { useTheme } from '@emotion/react'
import { useCursorEvent } from '@helpers/hooks/useCursorEvent'
import { useHovered } from '@helpers/hooks/useHovered'

interface IUseAccordionContent {
  data: {
    id: number
    title: string
    results: string[]
  }
  activeItem: number
  setActiveItem: Function
}

export const useAccordionContent = ({
  data,
  activeItem,
  setActiveItem
}: IUseAccordionContent) => {
  const theme = useTheme()
  const [hovered, hoverProps] = useHovered()
  const [mouseProps] = useCursorEvent({ enterState: ['hovered'] })
  const isOpen = activeItem === data.id
  const { triggerCursorUpdate } = useCursorActions()

  const handleUpdateItem = (item: number) => {
    setActiveItem(item)
  }

  return {
    theme,
    hovered,
    hoverProps,
    mouseProps,
    isOpen,
    handleUpdateItem,
    triggerCursorUpdate
  }
}
