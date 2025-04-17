import { useState, useEffect } from "react";

export default function useCurrencyApi(currency){
    const [data, setData]=useState({})

    // useing async await 
     useEffect(()=>{
        ;(async()=>{
        try {
            const response= await fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
            if (response) {
                const result = await response.json()
                    setData(result[currency])
            }
        } catch (error) {
            console.error("Error fetching data:", error);
        }}) ()
    },[currency])


    // useEffect(()=>{
    //     fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
    //      .then((res)=>res.json())
    //      .then((res)=>setData(res[currency]))        
    //  }, [currency])
return data
}