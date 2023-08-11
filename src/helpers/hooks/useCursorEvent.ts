import { CursorType, useCursorActions } from '@app/cursor'
import { generateCursorEvents } from '@helpers/utils/generate-cursor-events'

interface IUseCursorEventProps {
  enterState: CursorType[]
  enterStyles?: {}
  exitState?: CursorType[]
}

export const useCursorEvent = ({
  enterState,
  enterStyles = {},
  exitState
}: IUseCursorEventProps) => {
  const { setCursorType, resetCursor } = useCursorActions()
  const eventProps = generateCursorEvents({
    enterCallback: () => setCursorType(enterState, enterStyles),
    exitCallback: () => (exitState ? setCursorType(exitState) : resetCursor())
  })

  return [eventProps]
}
