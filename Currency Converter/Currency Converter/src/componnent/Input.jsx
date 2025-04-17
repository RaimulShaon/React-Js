import React from 'react';

function InputBox({label, amount, onAmountChng, onCurrencyChng, onCurrencyOpt= [], selecCurrency= "bdt" }) {
    return (
        <div className='bg-white p-3 rounded-lg text-sm flex'>
            <div>
                <label  className='mb-2 inline-block'>{label}</label>
                <input type="number" placeholder='Amount' value={amount} onChange={(e)=>onAmountChng && onAmountChng(Number(e.target.value))}/>
            </div>
            <div>
                <p>Currency Type</p>
                <select className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none" value={selecCurrency} onChange={(e)=> onCurrencyChng && onCurrencyChng(e.target.value)}>
                    {onCurrencyOpt.map((CurrencyName)=>(<option key={CurrencyName} value={CurrencyName}>{CurrencyName}</option>))}
                </select>
            </div>

        </div>
    );
}

export default InputBox;