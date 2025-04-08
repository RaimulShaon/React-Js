import React, {useState} from 'react';
import Counter from './Component/Counter';
import "./App.css"
import Total from './Component/Total';


const InitState = [
  {id: 1, value: 0},
  {id: 2, value: 0}
]

function App() {
  const [count, setCount] = useState(InitState)

  const InHandaler = (countId)=>{
    const updateCount=count.map((item)=>
      item.id === countId? {...item, value: item.value+1} : item
    )
    setCount(updateCount)
  }
  const DecHandaler = (countId)=>{
    const updateCount=count.map((item)=>
      item.id === countId? {...item, value: item.value -1} : item
    )
    setCount(updateCount)
  }

const totalvalue = count.reduce((total, item)=> total+item.value, 0)

  return (
    <>
     <div className=' w-full h-screen duration-200 flex flex-col items-center '>
      <h1 className=' text-3xl font-bold'>React Counter project 
      </h1>
      <div>
       {count.map((conts)=> (<Counter 
       count={conts.value} 
       key={conts.id} 
       onIncreament={()=>InHandaler(conts.id)}
       onDecreament={()=>DecHandaler(conts.id)}
       />))}
      </div>
      <div className='  bg-amber-300'><Total TotalCount={totalvalue}/></div>
    </div>
    </>
   
  );
}

export default App;