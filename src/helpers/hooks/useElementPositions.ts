import { useCursorTrigger } from '@app/cursor'
import { useCallback, useEffect, useState } from 'react'
import { useRefs } from './useRefs'

export const useElementPositions = () => {
  const refs = useRefs()
  const [trigger, setTrigger] = useState(0)
  const cursorTrigger = useCursorTrigger()

  const handleTrigger = () => setTrigger((state) => state + 1)

  const handlePosition = useCallback(
    (index: number) => {
      const ref = refs.map.get(index)

      if (!ref) return

      let x =
        ref?.getBoundingClientRect().left +
        document.documentElement.scrollLeft +
        ref?.offsetWidth / 2
      let y =
        ref?.getBoundingClientRect().top +
        document.documentElement.scrollTop +
        ref?.offsetHeight / 2

      ref.setAttribute('data-x-position', String(x))
      ref.setAttribute('data-y-position', String(y))
    },
    [refs]
  )

  /** TODO: Only update the updated ref instead of every ref */
  useEffect(() => {
    refs.map.forEach((_, index) => {
      handlePosition(index)
    })
  }, [refs, trigger, cursorTrigger])

  useEffect(() => {
    window.addEventListener('resize', handleTrigger)
    return () => window.removeEventListener('resize', handleTrigger)
  }, [])

  return [refs, { handleTrigger }] as const
}
