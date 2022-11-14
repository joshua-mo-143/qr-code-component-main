import { useState } from 'react'
import QRCard from './components/QRCard'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div id="cardWrapper" className='flex flex-col items-center justify-center h-screen'>
        <QRCard/>
      </div>
      </div>
  )
}

export default App
