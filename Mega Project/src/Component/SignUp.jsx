import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { login } from '../Store/authSlice';
import authService from '../appwrite/auth.service';
import {useForm} from 'react-hook-form'
import Logo from './Logo';
import Input from './Input';
import Button from './Button';


function SignUp(props) {
const navigate = useNavigate()
const dispatch = useDispatch()
const [error, setError] = useState("")
const {register, handleSubmit} = useForm()

const createSignUp = async(data)=>{
    setError("")
    try {
        const CreateUser = await authService.crateAccount(data)
        if (CreateUser) {
            const userData = await authService.getUserAcc(data)
            if (userData) dispatch(login(userData))
            (navigate("/")) 
        }
    } catch (error) {
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

            </div>
            <h2 className="text-center text-2xl font-bold leading-tight">sign Up to create Account</h2>
            <p className='mt-2 text-center text-base text-black/60'>DO you have any account?<Link to = "/login" >Sign in</Link></p>
            {error && <p className='text-red-600 mt-8'>{error}</p>}


            <form onSubmit={handleSubmit(createSignUp)}>
            <div className='space-y-5'>
                <Input label = "Full Name" placeholder = "Enter Your Full Name" {...register('name', {required: true, })} />

                <Input label= "Email" type= "email" placeholder="Enter your email" {...register(email, {required: true, validate:{
                    pattern:  (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) || "Email address must be a valid address"}})}  /> 
                    
                <Input label= "Password" type= "password" placeholder= "enter your Password" {...register('password', {required: true})} />

                <Button >Create Account</Button>

            </div>
                </form>
        </div>
        </div>
    );
}

export default SignUp;