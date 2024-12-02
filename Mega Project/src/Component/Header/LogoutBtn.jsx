import React from 'react';
import { useDispatch } from 'react-redux';
import authService from '../../appwrite/auth.service';
import { logout } from '../../Store/authSlice';

function LogoutBtn() {
    const dispatch =useDispatch()

    const logoutHandaler = ()=>{
        authService.logOut.then(()=> dispatch(logout()))
    }
    return (
        <div>
            <button className='bg-red-700 p-2 rounded-lg font-bold hover:bg-red-300 duration-100 '>Button</button>
        </div>
    );
}

export default LogoutBtn;