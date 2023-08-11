import create from 'zustand'
import { immer } from 'zustand/middleware/immer'

interface Actions {
  setOpenMenu: () => void
  setCloseMenu: () => void
  setRevealMedia: (payload: { id: string | number; media: string }) => void
  setCloseMedia: () => void
}

interface State {
  menuRevealed: boolean
  mediaRevealed: boolean
  media: string
  key: string | number

  actions: Actions
}

const useMenuStore = create<State>()(
  immer((set) => ({
    menuRevealed: false,
    mediaRevealed: false,
    media: '',
    key: 0,

    actions: {
      setOpenMenu: () =>
        set((state: State) => {
          state.menuRevealed = true
        }),

      setCloseMenu: () =>
        set((state: State) => {
          state.menuRevealed = false
          state.mediaRevealed = false
          state.media = ''
          state.key = 0
        }),

      setRevealMedia: ({ id, media }) =>
        set((state: State) => {
          state.mediaRevealed = true
          state.media = media
          state.key = id
        }),

      setCloseMedia: () =>
        set((state: State) => {
          state.mediaRevealed = false
        })
    }
  }))
)

export const useMenuRevealed = () => useMenuStore((state) => state.menuRevealed)
export const useMenuMediaRevealed = () =>
  useMenuStore((state) => state.mediaRevealed)
export const useMenuMedia = () => useMenuStore((state) => state.media)
export const useMenuKey = () => useMenuStore((state) => state.key)

export const useMenuActions = () => useMenuStore((state) => state.actions)
