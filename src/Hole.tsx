import React from 'react'
import { useDrop } from 'react-dnd'
import styled from 'styled-components'
import { potatoHeadAccessories } from './App'

export enum DraggableType {
  eyes = 'eyes',
  nose = 'nose',
  mouth = 'mouth',
}
interface Props {
  height: number
  width: number
  y: number
  tempHasNose?: boolean
  dropType?: DraggableType
  item?: React.ReactNode
}

const Hole: React.FC<Props> = ({ height, width, y, item, dropType }) => {
  const [currentItem, setCurrentItem] = React.useState(item)
  const ref = React.useRef<HTMLDivElement>(null)

  const left = width / 2
  const top = height * y

  const [, drop] = useDrop({
    accept: dropType ? dropType : Object.values(DraggableType),
    drop: (item: { id: string }) => {
      const newItem = potatoHeadAccessories.find(
        (accessory) => accessory.id === item.id
      )

      if (newItem) {
        setCurrentItem(newItem.component)
        // remove item from closet
      } else {
        //push item to closet
      }
    },
  })

  drop(ref)
  return (
    <HolePositioner left={left} top={top} ref={ref}>
      <svg
        width='10'
        height='10'
        viewBox={`0 0 10 10`}
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <circle cx='5' cy='5' r='5' fill='#584432' />
      </svg>
      {currentItem}
    </HolePositioner>
  )
}

const HolePositioner = styled.div<{ left: number; top: number }>`
  position: absolute;
  top: ${({ top }) => top}px;
  left: ${({ left }) => left}px;
`

export { Hole }
