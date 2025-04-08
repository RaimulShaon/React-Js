import { useState } from 'react'
import './App.css'
import Counter from './Component/Counter'
import Total from './Component/Total'


function App() {
  const [count, setCount] = useState()

 
  
  return (
    <>
      <div className=' w-full h-screen duration-200 flex flex-col items-center '>
      <h1 className=' text-3xl font-bold'>React Counter project 
      </h1>
      <Counter/>
       
    </div>
    </>
  )
}

export default App
