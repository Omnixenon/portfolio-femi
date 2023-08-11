import { getEnumKeyByValue } from '@helpers/utils/get-enum-by-value'
import { ANIMATION_KEYS } from '@styles/animations/keys'
import create from 'zustand'
import { immer } from 'zustand/middleware/immer'

export enum AnimationState {
  INCOMPLETE = 1,
  PROGRESSING = 2,
  COMPLETE = 3
}

export type AnimationType = {
  id: string
  animationState: AnimationState
}

interface Actions {
  initializeAnimation: (payload: string) => void
  setAnimationState: (
    payload: string,
    animationState: keyof typeof AnimationState
  ) => void
}

interface State {
  animations: Record<string, AnimationType>

  actions: Actions
}

const useAnimationStore = create<State>()(
  immer((set) => ({
    animations: {},

    actions: {
      initializeAnimation: (payload) =>
        set((state: State) => {
          state.animations[payload] = {
            id: payload,
            animationState: AnimationState.INCOMPLETE
          }
        }),

      setAnimationState: (payload, animationState) =>
        set((state: State) => {
          const enumValue = +getEnumKeyByValue(AnimationState, animationState)

          state.animations[payload] = {
            ...state.animations[payload],
            animationState: enumValue
          }
        })
    }
  }))
)

export const useAnimationList = () =>
  useAnimationStore((state) => state.animations)

export const useAnimationItem = (id: keyof typeof ANIMATION_KEYS) =>
  useAnimationStore((state) => state.animations[id])

export const useAnimationItemState = (id: keyof typeof ANIMATION_KEYS) =>
  useAnimationStore((state) =>
    state.animations[id]
      ? state.animations[id].animationState
      : AnimationState.INCOMPLETE
  )

export const useAnimationActions = () =>
  useAnimationStore((state) => state.actions)
