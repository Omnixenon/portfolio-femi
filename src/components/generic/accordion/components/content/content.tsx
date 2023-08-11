import * as S from './content.styles'
import { useAccordionContent } from './hooks/useAccordionContent'
import { IAccordionContentProps } from './utils/types'
import { CollapseItem, RotateIcon } from './utils/variants'

export const Content = ({
  data,
  activeItem,
  setActiveItem
}: IAccordionContentProps) => {
  const {
    theme,
    hoverProps,
    hovered,
    mouseProps,
    isOpen,
    handleUpdateItem,
    triggerCursorUpdate
  } = useAccordionContent({ data, activeItem, setActiveItem })

  return (
    <>
      <S.Header
        onClick={() => handleUpdateItem(data.id)}
        {...hoverProps}
        {...mouseProps}
        whileHover={{
          color: theme.colors.text
        }}
      >
        <S.IconRoot>
          <S.Icon {...RotateIcon(isOpen || hovered ? 0 : 45, 3)} />
          <S.Icon {...RotateIcon(isOpen || hovered ? 0 : -45, -3)} />
        </S.IconRoot>
        {data.title}
      </S.Header>

      <S.ContentRoot
        key={`${data.id}${data.title}`}
        {...CollapseItem(isOpen ? '100%' : '0')}
        onAnimationComplete={triggerCursorUpdate}
      >
        {data.results.map((item, index) => {
          return <S.Content key={item + index}>{item}</S.Content>
        })}
      </S.ContentRoot>
    </>
  )
}
