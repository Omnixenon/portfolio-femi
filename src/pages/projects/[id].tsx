import { useUserProjectsData } from '@app/data'
import { useProjectsActions } from '@app/projects'
import { Info } from '@components/projects/info'
import { Meta } from '@components/projects/meta'
import { Project } from '@components/projects/project'
import { DefaultLayout } from '@src/layouts/default'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

const Projects = () => {
  const router = useRouter()
  const { projects } = useUserProjectsData()
  const { setActiveProject } = useProjectsActions()
  const { id } = router.query

  useEffect(() => {
    const item = projects.find(({ id: projectId }) => projectId === id)
    setActiveProject(item ?? null)
  }, [id])

  return (
    <DefaultLayout
      title={
        projects
          .find(({ id: projectId }) => projectId === id)
          ?.name.join(' ')
          .Capitalize() as string
      }
    >
      <Project />
      <Info />
      <Meta />
    </DefaultLayout>
  )
}

export default Projects
