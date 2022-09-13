import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

import './App.css'
import { Closet } from './Closet'
import { Head } from './Head'
import { Nose } from './Nose'

export const potatoHeadAccessories: Accessory[] = [
  { component: <Nose id='simpleNose' />, id: 'simpleNose' },
  { component: <Nose id='redNose' color='red' />, id: 'redNose' },
]

function App() {
  return (
    <DndProvider backend={HTML5Backend}>
      <div>
        <Head width={190} height={270} />
        <Closet accessories={potatoHeadAccessories} />
      </div>
    </DndProvider>
  )
}

export default App
