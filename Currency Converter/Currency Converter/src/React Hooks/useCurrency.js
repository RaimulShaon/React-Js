import { useEffect, useState } from "react";


function useCurrency(currency) {
    const[data, setdata] = useState({})

    useEffect(()=>{
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
        .then((res)=>res.status(200).json())
        .then((res)=>setdata(res[currency]))        //cur jkhn chng krbo tkhn vitore chng hoye jabe. sob somoy key obj access korar jonne [] use krle hoy 
    }, [currency])
    return data
}

export default useCurrency;