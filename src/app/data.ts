import AboutData from '@src/data/about.json'
import HeaderData from '@src/data/header.json'
import HeroData from '@src/data/hero.json'
import ProjectsData from '@src/data/projects.json'
import SocialData from '@src/data/social.json'
import TestimonialsData from '@src/data/testimonials.json'
import create from 'zustand'
import { immer } from 'zustand/middleware/immer'

interface Data {
  header: typeof HeaderData
  about: typeof AboutData
  hero: typeof HeroData
  projects: typeof ProjectsData
  social: typeof SocialData
  testimonials: typeof TestimonialsData
}

interface State {
  data: Data
}

const useDataStore = create<State>()(
  immer(() => ({
    data: {
      header: HeaderData,
      about: AboutData,
      hero: HeroData,
      projects: ProjectsData,
      social: SocialData,
      testimonials: TestimonialsData
    }
  }))
)

export const useUserData = () => useDataStore((state) => state.data)
export const useUserHeaderData = () =>
  useDataStore((state) => state.data.header)
export const useUserHeroData = () => useDataStore((state) => state.data.hero)
export const useUserAboutData = () => useDataStore((state) => state.data.about)
export const useUserProjectsData = () =>
  useDataStore((state) => state.data.projects)
export const useUserSocialData = () =>
  useDataStore((state) => state.data.social)
export const useUserTestimonialsData = () =>
  useDataStore((state) => state.data.testimonials)
