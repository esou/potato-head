import React from 'react'
import styled from 'styled-components'
import { Hole } from './Hole'

interface Props {
  accessories: Accessory[]
}
const Closet: React.FC<Props> = ({ accessories }) => {
  return (
    <ClosetContainer>
      {accessories.map((accessory, index) => (
        <HoleContainer key={index}>
          <Hole height={0} width={0} y={0} item={accessory.component} />
        </HoleContainer>
      ))}
    </ClosetContainer>
  )
}

const ClosetContainer = styled.div`
  border: 1px solid black;
  margin: 1rem;
  padding: 2rem;
  display: flex;
`

const HoleContainer = styled.div`
  position: relative;
  width: 5rem;
  height: 5rem;
`

export { Closet }
