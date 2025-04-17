import { useState } from 'react'
import './App.css'
import InputBox from './componnent/Input'
import useCurrencyApi from './React Hooks/useCurrency'

function App() {
  const [amount, setAmount] = useState(0)
  const [to, setTo] = useState("bdt")
  const [from, setFrom] = useState("inr")
  const [Convert, setConvert] = useState(null)

  const CurrencyApi = useCurrencyApi(from)

  const options = Object.keys(CurrencyApi) // api theke data asbe tar key gula neya hoise

  const swap = ()=>{
    setFrom(to)
    setTo(from)
    setAmount(Convert)
    setConvert(amount)
  }
  const convertTo = ()=>{
    setConvert(amount*CurrencyApi[to])
  }

  return (
    <>
    <div className='w-full h-screen flex justify-center items-center bg-cover bg-no-repeat' style={{backgroundImage:(`bg-01`) }}>
      <form onSubmit={(e)=>{e.preventDefault(); convertTo()}}>

      <h1> Currency COnvert</h1>
      <div className='w-full mb-1'>

      <InputBox label="From" 
      amount={amount} 
      onAmountChng={(amount)=>setAmount(amount)} 
      onCurrencyChng={(currency)=>setAmount(amount)} 
      onCurrencyOpt={options}
      selecCurrency={from}/>
      </div>
      <div className="relative w-full h-0.5">
        <button className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5" onClick={swap}>Swap</button>
      </div>

      <div className='w-full mb-1'>
      <InputBox label="To"
      amount={Convert}
      onCurrencyChng={(currency)=>setTo(currency)}
      selecCurrency={to}
      onCurrencyOpt={options}/>
      </div>
      <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                        Convert {from.toUpperCase()} to {to.toUpperCase()}
      </button>
      </form>
    </div>
    </>
  )
}

export default App
