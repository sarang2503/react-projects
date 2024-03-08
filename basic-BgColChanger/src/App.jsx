import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState('olive')
  function changecolor(color){
    setColor(color)
  }

  return (
    <>
        
     <div className='w-full h-screen duration-200' style={{backgroundColor:color}} >
          <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
            <div   className='flex flex-wrap justify-center gap-3 shadow-lg px-4 py-2 rounded-3xl bg-white'>
            <button style={{backgroundColor:'red'}}  className='outeline-none px-4 py-1 rounded-full text-black shadow-lg color-black' onClick={()=>changecolor('red')}>red</button>
            <button style={{backgroundColor:'green'}} className='outeline-none px-4 py-1 rounded-full text-black shadow-lg color-black' onClick={()=>changecolor('green')}>green</button>
            <button style={{backgroundColor:'blue'}} className='outeline-none px-4 py-1 rounded-full text-black shadow-lg color-black' onClick={()=>changecolor('blue')}>blue</button>


            </div>

          </div>
        </div>
      
    </>
  )
}

export default App
