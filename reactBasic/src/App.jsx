import { useState } from 'react'
import './App.css'

function App() {
  let counter = 10

  let [value, setValue]= useState(counter)
  const addvalue = ()=> setValue(value+1)
  const removeValue = ()=> setValue(value-1)
console.log(value);

  return (
    <>
      <h1 className='text-3xl font-bold underline bg-black text-emerald-500' >Password Genarator</h1>
      <h1>raimul hasan</h1>
     <h2>Counter Value: {value}</h2>
     <button className='bg-green-400 rounded-2xl text-xl p-2 m-3' onClick={addvalue}>Increase</button><br />
     <button class="bg-sky-500 rounded-2xl text-xl hover:bg-sky-700 p-2" onClick={removeValue}>Dicrease</button>
    <p>Total value:   {value}</p>
    </>
  )
}

export default App
