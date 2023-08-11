import { useCursorActions } from '@app/cursor'
import { generateCursorEvents } from '@helpers/utils/generate-cursor-events'
import { useEffect, useState } from 'react'
import MultiRef from 'react-multi-ref'
import { useHovered } from './useHovered'

interface IUseCursorLockedProps {
  refs: MultiRef<any, HTMLDivElement>
  disabled?: boolean
}

export const useCursorLocked = ({ refs, disabled }: IUseCursorLockedProps) => {
  const { setCursorType, resetCursor } = useCursorActions()
  const [items, setItems] = useState<any[]>([])
  const [initialHover, initialHoverProps] = useHovered()

  const handleUpdateItems = () => {
    let arr: any[] = []
    const isDisabled = !!disabled ? disabled : false

    refs.map.forEach((item, index) => {
      arr.push({
        ref: refs.ref(index),
        ...initialHoverProps,
        enterCallback: () =>
          setCursorType(['locked'], {
            left: `${item.getAttribute('data-x-position')}px`,
            top: `${item.getAttribute('data-y-position')}px`
          }),
        ...(!isDisabled &&
          generateCursorEvents({
            enterCallback: () =>
              setCursorType(['locked'], {
                left: `${item.getAttribute('data-x-position')}px`,
                top: `${item.getAttribute('data-y-position')}px`
              }),
            exitCallback: () => resetCursor()
          }))
      })
    })

    setItems(arr)
  }

  useEffect(() => {
    handleUpdateItems()
  }, [refs, disabled])

  useEffect(() => {
    if (!disabled && initialHover) {
      items[0].enterCallback()
    }
  }, [disabled])

  return items
}
