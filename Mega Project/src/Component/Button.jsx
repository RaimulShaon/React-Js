    import React from 'react';
    
    function Button({children, type = "button", bgColor = "bg-green-600", font ="font-bold", hover = 'hover:bg-green-600', classname = "",  ...props}) {
        return (
           <button className= {`px-2 py-4 rounded-lg ${bgColor} ${font} ${hover} ${classname} `} {...props}  >{children}</button>
        );
    }
    
    export default Button;      