import React, { useState } from 'react';




function Counter({count, onIncreament, onDecreament}) {

    // const HInc = ()=>{
    //     setCount((prep) => prep+ 1)
    // }
    // const DInc = ()=>{
    //     setCount((prep) => prep- 1)
    // }
    return (
        <div className=' flex flex-col justify-center items-center p-8 border-solid border-2 border-black bg-gray-300 max-w-sm mx-10 my-2 '>
            <div><h1 className=' text-3xl font-bold text-violet-500'>Count: {count} </h1></div>
            <div>
             <button className='bg-green-500 rounded-lg font-bold p-2 m-3' onClick={onIncreament}>Increament</button>
             <button className='bg-red-500 rounded-lg font-bold p-2 m-3' onClick={onDecreament}>Decreament</button>
        </div>
        
        </div>
    );
}

export default Counter;