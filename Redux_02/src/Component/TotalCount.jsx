import React from 'react';

function TotalCount({totalCount}) {
    return (
        <div>
            <div className="text-3xl  text-gray-100 font-bold p-10">Total Count: {totalCount} </div>
        </div>
    );
}

export default TotalCount;