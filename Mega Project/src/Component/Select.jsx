import React, { useId } from 'react';

function Select({label, classname = "",  options, ...props}, ref) {

    const id = useId()
    return (
        <div className=' w-full'>
            {label && <label className='inline-block mb-1'>{label}</label>}

            <select  id= {id} {...props} className= {`p-3 rounded-lg  outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className}`} > {options?.map((item)=>(<option  key={item} value={item}>{item}</option>))} </select>
            
        </div>

    );
}

export default React.forwardRef(Select);      