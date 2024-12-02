import React from 'react';
import Container from '../Container/Container';
import LogoutBtn from './LogoutBtn';
import { useSelector } from 'react-redux';
import {Link, useNavigate} from "react-router-dom"
import Logo from '../Logo';



function Header() {
    const authStatus = useSelector((state)=> state.auth.status)
    const navigate = useNavigate()

    const navItem = [
        {
            name: 'Home',
            slug: '/',
            active: true
        },
        {
            name: 'Login',
            slug: '/login',
            active: !authStatus
        },
        {
            name: 'SignUp',
            slug: '/signup',
            active: !authStatus
        },
        {
            name: 'All-post',
            slug: '/allpost',
            active: !authStatus
        },
        {
            name: 'Add post',
            slug: '/addpost',
            active: !authStatus
        }
    ]
    return (
        <header className='bg-slate-600'>
            <Container>
                <nav className='flex'>
                    <div>
                        <link to="/" ><Logo/></link  >
                    </div>
                    <ul className='flex ml-auto'>
                     {navItem.map((item)=> item.active? <li key={item.name}>
                        <button onClick={()=> navigate(item.slug)} className='bg-blue-700 p-2 rounded-lg font-bold hover:bg-blue-300 duration-100 '>{item.name}</button>
                     </li>: null)}         {/*jeitag repeat hoy sei tag a key lagaite hoy*/}
                    {authStatus && (<li><LogoutBtn/></li>)}     {/*jjodi authstatus true hoy then pore logout dekhabe*/}
                    </ul>
                </nav>
            </Container>
        </header>
    );
}

export default Header;