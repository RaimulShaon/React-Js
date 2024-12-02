import React from 'react';

function Counter({counter, onIncrement, onDecrement}) {




    return (
        <div className='flex p-8 flex-col  items-center justify-center border-solid border-4 shadow-lg border-black max-w-md mx-10 m-2 bg-sky-700 ' >
            <div ><h1 className="text-3xl  text-gray-100 font-bold">Count {counter}</h1> </div>
            <div  >
                <button onClick={ onIncrement} className='bg-green-600 rounded-lg font-bold m-5 p-4'>Increament</button>
                <button onClick={onDecrement} className='bg-red-600 rounded-lg font-bold p-4'>Dicreament</button>
            </div>
        </div>
    );
}

export default Counter;