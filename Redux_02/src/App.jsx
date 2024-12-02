import { useState } from 'react';
import Counter from './Component/counter.jsx';
import TotalCount from './Component/TotalCount';
import { useDispatch, useSelector } from 'react-redux';
import { decreament, increament } from './CounterSlice';

const initState = [
  { id: 1, value: 0 },
  { id: 2, value: 0 },
];

function App() {
  const [counter, setCounter] = useState(initState);

const selector = useSelector((state)=>state.counterS)
const dispatach = useDispatch()


  const incrementHandler = (counterId) => {
    // const updatedCount = counter.map((item) =>
    //   item.id === counterId
    //     ? { ...item, value: item.value + 1 }
    //     : item
    // );
    // setCounter(updatedCount);
    dispatach(increament(counterId))
  };

  const decrementHandler = (counterId) => {
    // const updatedCount = counter.map((item) =>
    //   item.id === counterId
    //     ? { ...item, value: item.value - 1 }
    //     : item
    // );
    // setCounter(updatedCount);
    dispatach(decreament(counterId))
  };

  const totalValue = counter.reduce((total, item) => total + item.value, 0);

  return (
    <div className="w-screen h-screen p-10 bg-gray-600 flex flex-col shadow-lg items-center justify-center">
      <h1 className="text-3xl text-lime-200 font-bold underline">Counter</h1>
      <div>
        {counter.map((count) => (
          <Counter
            counter={count.value}
            key={count.id}
            onIncrement={() => incrementHandler(count.id)}
            onDecrement={() => decrementHandler(count.id)}
          />
        ))}
      </div>
      <div className="border-solid border-4 shadow-lg border-black max-w-md mx-10 m-2 bg-green-700">
        <TotalCount totalCount={totalValue} />
      </div>
    </div>
  );
}

export default App;
