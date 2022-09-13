import React from 'react'
import { useDrag } from 'react-dnd'
import styled from 'styled-components'
import { DraggableType } from './Hole'

interface Props {
  id: string
  color?: string
}
const Nose: React.FC<Props> = ({ id, color = '#8B6D52' }) => {
  const width = 55
  const heigth = 36
  const ref = React.useRef<HTMLDivElement>(null)
  const [, drag] = useDrag({
    type: DraggableType.nose,
    item: () => ({ id }),
  })
  drag(ref)
  return (
    <NoseContainer width={width} height={heigth} ref={ref}>
      <svg
        width={width}
        height={heigth}
        viewBox={`0 0 ${width} ${heigth}`}
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M45 18C45 27.9411 37.3888 36 28 36C18.6112 36 11 27.9411 11 18C11 8.05887 18.6112 0 28 0C37.3888 0 45 8.05887 45 18Z'
          fill={color}
        />
        <path
          d='M22 27C22 31.9706 17.0751 36 11 36C4.92487 36 0 31.9706 0 27C0 22.0294 4.92487 18 11 18C17.0751 18 22 22.0294 22 27Z'
          fill={color}
        />
        <path
          d='M55 27C55 31.9706 50.0751 36 44 36C37.9249 36 33 31.9706 33 27C33 22.0294 37.9249 18 44 18C50.0751 18 55 22.0294 55 27Z'
          fill={color}
        />
      </svg>
    </NoseContainer>
  )
}

const NoseContainer = styled.div<{ width: number; height: number }>`
  position: absolute;
  top: -${({ height }) => height / 2}px;
  left: -${({ width }) => width / 2}px;
`

export { Nose }
