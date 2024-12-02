import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { login } from '../Store/authSlice';
import authService from '../appwrite/auth.service';
import {useForm} from 'react-hook-form'
import Logo from './Logo';
import Input from './Input';
import Button from './Button';


function Login(props) {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {register, handleSubmit} = useForm()
    const [error, setError] = useState("")

    const userLogin = async (data) =>{
        setError("")    //jkhn e userlogin or register banabo purber joto error ace ta empty kore dibo
        try {
            const session = await authService.login(data)
            if (session) {
                const userData = await authService.getUserAcc()
                if (userData) dispatch(login(userData))
                    navigate("/")

            }
        }catch (error) {
                setError(error.message)
            }
        }

    return (
        <div className='flex items-center justify-items-center w-full'>
            <div className='mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10'>
            <div className="mb-2 flex justify-center">
                <span>
                    <Logo/>
                </span>

            </div><h2 className="text-center text-2xl font-bold leading-tight">Sign in to your account</h2>
            
            <p className='mt-2 text-center text-base text-black/60'>DO you have any account?<Link to = "/signup" >Sign up</Link></p>

            {error && <p className='text-red-600 mt-8'> {error} </p>}

            <form onSubmit={handleSubmit(userLogin)}>       {/* form jkhn e submit hobe tkhn e handleSubmit dite hobe. H-submit ekti method ja nijer (userLogin) theke ekti method diy kivabe form sybmit hobe. form jkhn puron hobe tkhn H-submit ekti event ja call hobe. form er vitore Input fill nibo tkn oi register use kore oikhane state mang korar proyojon nai  */}
                <Input label = "Email" type = "email" placeholder = "Enter Your Email" {...register('email', {required: true, validate:{
                    pattern:  (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) || "Email address must be a valid address" 
                } }) } />
                <Input label = "Password" type = "password" placeholder = "Enter your Password" {...register('password',{required: true, minLength:6 })} />
                <Button type='submit'>Sign In</Button>

            </form>
        </div>
        </div>
    );
}

export default Login;