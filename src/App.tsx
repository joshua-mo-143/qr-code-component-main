import { useState } from 'react'
import qrCodeImg from './assets/image-qr-code.png'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div id="cardWrapper" className='flex flex-col items-center justify-center h-screen'>
          <div id="cardContainer" className="bg-white shadow-md p-2 rounded-3xl text-center w-[250px] sm:w-[300px] lg:w-[275px] grid grid-cols-1 grid-rows-10 gap-2">
            <img id="qrCode" src={qrCodeImg} className="object-scale-down w-full m-auto p-3 sm:p-2 lg:p-3 rounded-3xl row-span-8" alt="Frontend Mentor QR Code"/>
            <h1 id="titleText" className='text-lg font-bold px-4 lg:px-8 font-outfit row-span-1'>Improve your front-end skills by building projects</h1>
            <p id="subText" className='px-3 pb-4 font-outfit text-[13px] lg:text-[15px] row-span-1'>Scan the QR code to visit Frontend Mentor and take your coding skills to the next level.</p>
          </div>
      </div>
      </div>
  )
}

export default App
