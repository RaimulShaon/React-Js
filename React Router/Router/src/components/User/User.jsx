import React from "react";
import { useParams } from "react-router-dom";

export default function Users() {
    const {userId} = useParams()
    return(
        <div className="bg-zinc-600 text-3xl rounded-lg p-3 text-white ">UserId: {userId}</div>
    )
}