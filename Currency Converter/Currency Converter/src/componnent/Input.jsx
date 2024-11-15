import React, { useId } from 'react'

function InputBox({
    label,
    amount, 
    onAmountCng,
    onCurrencyCng,
    onCurrencyOpt = [],
    selctCurrency = "usd",
    amountDisable= false,
    currencyDisables = false,
    className=""}) {

    const amountId = useId()  
  return (
   <div className= {`bg-white p-3 rounded-lg text-sm flex ${className}`}>
<div className='w-1/2'>
<label htmlFor={amountId}>{label}</label>
<input 
id = {amountId}
type="number" 
placeholder='Amount'
disabled = {amountDisable}
value={amount}
onChange = {(e)=> onAmountCng && onAmountCng(Number(e.target.value))}
 />
</div>

<div className='w-1/2 flex'>
<p>Currency Type</p>
<select value={selctCurrency}
onChange={(e)=> onCurrencyCng && onCurrencyCng(e.target.value)}
disabled = {currencyDisables}
 className='rounded-lg p-1 bg-gray-300'>

{onCurrencyOpt.map((currency)=>(
    <option key ={currency} value="usd">{currency}</option>

))}
</select>
</div>
   </div>
  )
}

export default InputBox
