import { THEME_BREAKPOINTS } from '@theme/constants'

export const media = (n: keyof typeof THEME_BREAKPOINTS) => {
  const bpArray = Object.keys(THEME_BREAKPOINTS).map((key) => [
    key,
    THEME_BREAKPOINTS[key as keyof typeof THEME_BREAKPOINTS]
  ])

  const [result] = bpArray.reduce((acc, [name, size]) => {
    if (n === name) return [...acc, `@media (min-width: ${size}px)`]
    return acc
  }, [])

  return result
}
