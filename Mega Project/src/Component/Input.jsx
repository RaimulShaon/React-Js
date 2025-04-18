import { useId } from "react";
import React  from 'react';

const Input = React.forwardRef(function Input({label, type = "text", className ="", ...props}, ref){

    const id= useId()
    return <div className="w-full">
        {label && <label className='inline-block mb-1 pl-1' 
            htmlFor={id}>{label}</label>}
            <Input type={type} className={`p-3 rounded-lg  outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className} `} ref= {ref} {...props} id= {id}  />
    </div>
})
export default Input;