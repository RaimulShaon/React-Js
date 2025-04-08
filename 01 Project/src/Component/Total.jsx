import React from 'react';

function Total({TotalCount}) {
    return (
        <div className='p-10 text-lg font-bold border-solid border-2 border-black  bg-amber-300'>
            Total: {TotalCount}
        </div>
    );
}

export default Total;