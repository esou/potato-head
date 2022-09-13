import React from 'react'
import styled from 'styled-components'
import { DraggableType, Hole } from './Hole'

interface Props {
  width: number
  height: number
}
const Head: React.FC<Props> = ({ width, height }) => {
  const [canDragAnyItemAnywhere, setCanDragAnyItemAnywhere] =
    React.useState(false)

  const [temporaryReset, setTemporaryReset] = React.useState(false)

  return (
    <div>
      <HeadContainer key={temporaryReset.toString()}>
        <svg
          width={width}
          height={height}
          viewBox={`0 0 ${width} ${height}`}
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d={`M${width} 167C${width} 223.885 135.825 ${height} 87.5 ${height}C39.1751 ${height} 0 223.885 0 167C0 110.115 14.6751 0 63 0C111.325 -1.14441e-05 170 28 190 167Z`}
            fill='#B1957B'
            fillOpacity='0.6'
          />
        </svg>
        <Hole
          height={height}
          width={width}
          y={0.3}
          dropType={canDragAnyItemAnywhere ? undefined : DraggableType.eyes}
        />
        <Hole
          height={height}
          width={width}
          y={0.5}
          dropType={canDragAnyItemAnywhere ? undefined : DraggableType.nose}
        />
        <Hole
          height={height}
          width={width}
          y={0.7}
          dropType={canDragAnyItemAnywhere ? undefined : DraggableType.mouth}
        />
      </HeadContainer>
      <Button onClick={() => setTemporaryReset((prev) => !prev)}>reset</Button>
      <Button onClick={() => setCanDragAnyItemAnywhere((prev) => !prev)}>
        {canDragAnyItemAnywhere
          ? 'move to restricted mode'
          : 'move to cheat mode'}
      </Button>
    </div>
  )
}

const HeadContainer = styled.div`
  position: relative;
  display: flex;
`
const Button = styled.button`
  margin: 1rem;
  background-color: darkblue;
  border-radius: 0.2rem;
  border: none;
  color: white;
`

export { Head }
