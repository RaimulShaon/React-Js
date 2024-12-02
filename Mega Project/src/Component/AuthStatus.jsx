import React, {useEffect, useState} from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';



function AuthProtectedStatus({children, authintacation= true}) {
    const navigate = useNavigate()
    const [loader, setLoader]= useState(true)
    const authStatus = useSelector(state=>state.auth.status)

    useEffect(()=>{
        if (authintacation && authStatus !== authintacation ) {
            navigate("/login")
        } else if(!authintacation && authStatus !== authintacation ){
            navigate("/")
        }
        setLoader(false)
    }, [authStatus, navigate, authintacation])
    
    return (
        loader? <h1>Loading...</h1>: {children}
    );
}

export default AuthProtectedStatus;