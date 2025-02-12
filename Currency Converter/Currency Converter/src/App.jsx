import { useState } from 'react'
import InputBox from './componnent/Input.jsx'
import useCurrency from './React Hooks/useCurrency.js'
import './App.css'

function App() {
 const [amount, setAmount ] = useState(0)
 const [from, setFrom] = useState("usd")
 const [To, setTo] = useState("bdt")
 const [convert, setConvert] = useState("")

 const currencyInfo = useCurrency(from)
 const options = Object.keys(currencyInfo)


 const swap = ()=>{
  setFrom(To)
  setTo(from)
  setAmount(convert)
  setConvert(amount)
 }

const convertTo = () => {
  setConvert(amount * currencyInfo[To])
}

  return (
   <div className='w-full h-screen flex justify-center items-center bg'>
    <div className='w-full'>
      <div><form action="" onSubmit={(e)=>{
        e.preventDefault()    //????
        convertTo()
      }}>
        <div className='w-full mb-1'>
          <InputBox  
          label="From"
          amount={amount}
          onCurrencyOpt={options}
          onCurrencyCng={(currency) => setAmount(amount)}
          selctCurrency={from}
          onAmountCng={(amount)=>{
            setAmount(amount)
          }} />
        </div>
        <div className='relative w-full h-1'>
          <button className='bg-blue' type='button ' onClick={swap}>swap</button>
        </div>
        <div className='w-full mb-1'>
          <InputBox  
          label="To"
          amount={convert}
          onCurrencyOpt={options}
          onCurrencyCng={(currency) => setTo(currency)}
          selctCurrency={To}
          amountDisable />
        </div>
        <button type='submit'>convert</button>
        </form>
        </div>
    </div>
   </div>
  )
}

export default App
