import React from 'react'
import { useDrag } from 'react-dnd'
import styled from 'styled-components'
import { DraggableType } from './Hole'

interface Props {
  id: string
  color?: string
  mustache?: boolean
}
const Eyes: React.FC<Props> = ({ id, color = '#8B6D52', mustache }) => {
  const width = 42
  const heigth = 29

  const ref = React.useRef<HTMLDivElement>(null)
  const [, drag] = useDrag({
    type: DraggableType.eyes,
    item: () => ({ id }),
  })
  drag(ref)
  return (
    <EyesContainer width={width} height={heigth} ref={ref}>
      <svg
        width={width}
        height={heigth}
        viewBox={`0 0 ${width} ${heigth}`}
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M42 14.5C42 22.5081 36.6274 29 30 29C23.3726 29 18 22.5081 18 14.5C18 6.49187 23.3726 0 30 0C36.6274 0 42 6.49187 42 14.5Z'
          fill='#8B6D52'
        />
        <path
          d='M42 14.5C42 22.5081 36.6274 29 30 29C23.3726 29 18 22.5081 18 14.5C18 6.49187 23.3726 0 30 0C36.6274 0 42 6.49187 42 14.5Z'
          fill='#8B6D52'
        />
        <path
          d='M40 14.5C40 20.8513 35.7467 26 30.5 26C25.2533 26 21 20.8513 21 14.5C21 8.14873 25.2533 3 30.5 3C35.7467 3 40 8.14873 40 14.5Z'
          fill='white'
        />
        <path
          d='M29.5 10.5C25.4995 10.3454 24.5308 10.197 21.5 8C21.3445 5.74594 21.6625 4.69361 24.5 4C25.5039 2.10465 25.9012 0.537284 28.5 1C30.3824 0.539811 31.861 0.807948 33.5 2C35.3645 2.40098 38.5 5.49999 38.5 5.49999C37.5 5.5 39.5 8 38.5 8C37.5 8 33.7253 10.2702 29.5 10.5Z'
          fill='#8B6D52'
        />
        <path
          d='M36 17C36 18.6569 34.6569 20 33 20C31.3431 20 30 18.6569 30 17C30 15.3431 31.3431 14 33 14C34.6569 14 36 15.3431 36 17Z'
          fill='black'
        />
        <path
          d='M24 14.5C24 22.5081 18.6274 29 12 29C5.37258 29 0 22.5081 0 14.5C0 6.49187 5.37258 0 12 0C18.6274 0 24 6.49187 24 14.5Z'
          fill='#8B6D52'
        />
        <path
          d='M24 14.5C24 22.5081 18.6274 29 12 29C5.37258 29 0 22.5081 0 14.5C0 6.49187 5.37258 0 12 0C18.6274 0 24 6.49187 24 14.5Z'
          fill='#8B6D52'
        />
        <path
          d='M22 14.5C22 20.8513 17.7467 26 12.5 26C7.25329 26 3 20.8513 3 14.5C3 8.14873 7.25329 3 12.5 3C17.7467 3 22 8.14873 22 14.5Z'
          fill='white'
        />
        <path
          d='M11.5 10.5C7.49948 10.3454 6.53079 10.197 3.5 8C3.34449 5.74594 3.66247 4.69361 6.5 4C7.50387 2.10465 7.90116 0.537284 10.5 1C12.3824 0.539811 13.861 0.807948 15.5 2C17.3645 2.40098 20.5 5.49999 20.5 5.49999C19.5 5.5 21.5 8 20.5 8C19.5 8 15.7253 10.2702 11.5 10.5Z'
          fill='#8B6D52'
        />
        <path
          d='M18 17C18 18.6569 16.6569 20 15 20C13.3431 20 12 18.6569 12 17C12 15.3431 13.3431 14 15 14C16.6569 14 18 15.3431 18 17Z'
          fill='black'
        />
      </svg>
    </EyesContainer>
  )
}

const EyesContainer = styled.div<{ width: number; height: number }>`
  position: absolute;
  top: -${({ height }) => height * 0.4}px;
  left: -${({ width }) => width / 2}px;
`

export { Eyes }
