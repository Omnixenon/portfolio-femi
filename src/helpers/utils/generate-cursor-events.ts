import { MouseEventHandler } from 'react'

interface GenerateCursorEvents {
  enterCallback?: MouseEventHandler
  exitCallback?: MouseEventHandler
}

export const generateCursorEvents = ({
  enterCallback,
  exitCallback
}: GenerateCursorEvents) => {
  return { onMouseEnter: enterCallback, onMouseLeave: exitCallback }
}
