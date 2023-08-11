import { CSSProperties } from 'react'
import create from 'zustand'
import { immer } from 'zustand/middleware/immer'

export type CursorType = 'pointer' | 'hovered' | 'locked' | 'text'

interface Actions {
  setCursorType: (payload: CursorType[], style?: CSSProperties) => void
  resetCursor: () => void
  triggerCursorUpdate: () => void
}

interface State {
  cursorType: CursorType[] | false
  cursorStyles: {}
  cursorTrigger: number

  actions: Actions
}

const useCursorStore = create<State>()(
  immer((set) => ({
    cursorType: false,
    cursorStyles: {},
    cursorTrigger: 0,

    actions: {
      setCursorType: (payload, styles) =>
        set((state: State) => {
          state.cursorType = payload
          state.cursorStyles = styles ?? {}
        }),

      resetCursor: () =>
        set((state: State) => {
          state.cursorType = false
          state.cursorStyles = {}
        }),

      triggerCursorUpdate: () =>
        set((state: State) => {
          state.cursorTrigger = state.cursorTrigger + 1
        })
    }
  }))
)

export const useCursorType = () => useCursorStore((state) => state.cursorType)
export const useCursorStyles = () =>
  useCursorStore((state) => state.cursorStyles)
export const useCursorTrigger = () =>
  useCursorStore((state) => state.cursorTrigger)

export const useCursorActions = () => useCursorStore((state) => state.actions)
