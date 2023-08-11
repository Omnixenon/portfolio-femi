import ProjectsData from '@src/data/projects.json'
import create from 'zustand'
import { immer } from 'zustand/middleware/immer'

interface Actions {
  setActiveProject: (payload: State['activeProject']) => void
}

interface State {
  activeProject: Unpacked<typeof ProjectsData.projects> | null

  actions: Actions
}

const useProjectsStore = create<State>()(
  immer((set) => ({
    activeProject: null,

    actions: {
      setActiveProject: (payload: State['activeProject']) =>
        set((state: State) => {
          state.activeProject = payload
        })
    }
  }))
)

export const useProjectsActiveProject = () =>
  useProjectsStore((state) => state.activeProject)

export const useProjectsActions = () =>
  useProjectsStore((state) => state.actions)
