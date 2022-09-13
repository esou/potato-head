import React from 'react'
import { useDrag } from 'react-dnd'
import styled from 'styled-components'
import { DraggableType } from './Hole'

interface Props {
  id: string
  color?: string
  mustache?: boolean
}
const Mouth: React.FC<Props> = ({ id, color = '#8B6D52', mustache }) => {
  const width = 102
  const heigth = 50

  const ref = React.useRef<HTMLDivElement>(null)
  const [, drag] = useDrag({
    type: DraggableType.mouth,
    item: () => ({ id }),
  })
  drag(ref)
  return (
    <MouthContainer width={width} height={heigth} ref={ref}>
      <svg
        width={width}
        height={heigth}
        viewBox={`0 0 ${width} ${heigth}`}
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M57.5027 16.5C57.5027 25.6127 50.1154 33 41.0027 33C31.89 33 24.5027 25.6127 24.5027 16.5C24.5027 7.3873 31.89 0 41.0027 0C50.1154 0 57.5027 7.3873 57.5027 16.5Z'
          fill='#7D0D0D'
        />
        <path
          d='M79.5027 16.5C79.5027 25.6127 72.1154 33 63.0027 33C53.89 33 46.5027 25.6127 46.5027 16.5C46.5027 7.3873 53.89 0 63.0027 0C72.1154 0 79.5027 7.3873 79.5027 16.5Z'
          fill='#7D0D0D'
        />
        <path
          d='M70.5027 33.5C70.5027 42.6127 63.1154 50 54.0027 50C44.89 50 37.5027 42.6127 37.5027 33.5C37.5027 24.3873 44.89 17 54.0027 17C63.1154 17 70.5027 24.3873 70.5027 33.5Z'
          fill='#7D0D0D'
        />
        <path
          d='M0 27.4289L33.4753 1.93388L43.5027 46.2285L0 27.4289Z'
          fill='#7D0D0D'
        />
        <path
          d='M101.366 29.5663L64.5027 46.2285L75.5027 5.72924L101.366 29.5663Z'
          fill='#7D0D0D'
        />
      </svg>
    </MouthContainer>
  )
}

const MouthContainer = styled.div<{ width: number; height: number }>`
  position: absolute;
  top: -${({ height }) => height * 0.4}px;
  left: -${({ width }) => width / 2}px;
`

export { Mouth }
