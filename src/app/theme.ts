import { theme } from '@theme/index'
import { dissoc } from 'ramda'
import create from 'zustand'
import { persist } from 'zustand/middleware'
import { immer } from 'zustand/middleware/immer'
import shallow from 'zustand/shallow'

interface Actions {
  setTheme: (payload: keyof typeof theme) => void
  toggleTheme: () => void
}

interface State {
  currentTheme: keyof typeof theme
  listOrder: Array<keyof typeof theme>

  actions: Actions
}

const useThemeStore = create<State>()(
  persist(
    immer((set) => ({
      currentTheme: 'dark',
      listOrder: ['dark', 'light'],

      actions: {
        setTheme: (payload: keyof typeof theme) =>
          set((state: State) => {
            state.currentTheme = payload
          }),

        toggleTheme: () =>
          set((state: State) => {
            const theme = state.currentTheme
            const isLastItem = theme === state.listOrder.at(-1)
            const currentIndex = state.listOrder.findIndex(
              (item) => theme === item
            )

            state.currentTheme = isLastItem
              ? state.listOrder[0]
              : state.listOrder[currentIndex + 1]
          })
      }
    })),
    { name: 'theme', partialize: dissoc('actions') }
  )
)

export const useCurrentTheme = () =>
  useThemeStore((state) => state.currentTheme)

export const useThemeListOrder = () =>
  useThemeStore((state) => state.listOrder, shallow)

export const useThemeActions = () => useThemeStore((state) => state.actions)
