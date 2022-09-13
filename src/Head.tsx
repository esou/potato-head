import styled from 'styled-components'
import { Hole } from './Hole'

interface Props {
  width: number
  height: number
}
const Head: React.FC<Props> = ({ width, height }) => {
  return (
    <HeadContainer>
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
      <Hole height={height} width={width} y={0.3} />
      <Hole height={height} width={width} y={0.5} tempHasNose />
      <Hole height={height} width={width} y={0.7} />
    </HeadContainer>
  )
}

const HeadContainer = styled.div`
  position: relative;
  display: flex;
`

export { Head }
