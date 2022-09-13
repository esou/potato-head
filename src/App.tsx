import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import styled from 'styled-components'

import './App.css'
import { Closet } from './Closet'
import { Eyes } from './Eyes'
import { Head } from './Head'
import { Mouth } from './Mouth'
import { Nose } from './Nose'

export const potatoHeadAccessories: Accessory[] = [
  { component: <Nose id='simpleNose' />, id: 'simpleNose' },
  { component: <Nose id='mustache' mustache />, id: 'mustache' },
  { component: <Nose id='redNose' color='red' />, id: 'redNose' },
  { component: <Eyes id='simpleEyes' />, id: 'simpleEyes' },
  { component: <Mouth id='simpleMouth' />, id: 'simpleMouth' },
]

function App() {
  return (
    <DndProvider backend={HTML5Backend}>
      <MainContainer>
        <Head width={190} height={270} />
        <Closet accessories={potatoHeadAccessories} />
      </MainContainer>
    </DndProvider>
  )
}

const MainContainer = styled.div`
  padding: 1rem;
`

export default App
