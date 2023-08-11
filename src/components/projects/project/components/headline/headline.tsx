import { useProjectsActiveProject } from '@app/projects'
import { Fragment } from 'react'
import { S } from './headline.styles'

export const ProjectHeadline = () => {
  const project = useProjectsActiveProject()

  return (
    <S.Root>
      {project?.name.map((item, index) => {
        if (index === 0) {
          return (
            <Fragment key={item}>
              {item} <br />
            </Fragment>
          )
        }

        return <Fragment key={item}>{item}</Fragment>
      })}
    </S.Root>
  )
}
