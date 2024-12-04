import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useLoaderData } from "react-router-dom";

export default function Github() {
    // const data =useLoaderData()
    const [data, setData] = useState([])
    useEffect(()=>{
       fetch('https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/bdt.json')
       .then((res) => res.json())
       .then((data) =>{
        console.log(data);
        
        setData(data)
       })   
    } )
    return(
        <div className="bg-zinc-600 text-3xl rounded-lg p-3 text-white ">Git Data: {Object.keys(data)}</div>
    )
}

// export const gitLoaderInfo = async () => {
//     const response = await fetch( 'https://api.github.com'    )
//     return response.json()
// }