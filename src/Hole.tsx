import styled from 'styled-components'
import { Nose } from './Nose'

interface Props {
  height: number
  width: number
  y: number
  tempHasNose?: boolean
  dropType?: 'eyes' | 'nose' | 'mouth'
}

const Hole: React.FC<Props> = ({ height, width, y, tempHasNose }) => {
  const left = width / 2
  const top = height * y
  return (
    <HolePositioner left={left} top={top}>
      <svg
        width='10'
        height='10'
        viewBox={`0 0 10 10`}
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <circle cx='5' cy='5' r='5' fill='#584432' />
      </svg>
      {tempHasNose && <Nose />}
    </HolePositioner>
  )
}

const HolePositioner = styled.div<{ left: number; top: number }>`
  position: absolute;
  top: ${({ top }) => top}px;
  left: ${({ left }) => left}px;
`

export { Hole }
