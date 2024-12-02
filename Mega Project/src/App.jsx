import { useEffect, useState } from 'react'
import {useDispatch} from 'react-redux'
import './App.css'
import authService from './appwrite/auth.service'
import { login, logout } from './Store/authSlice'
import Header from './Component/Header/Header'
import Footer from './Component/Footer/Footer'

function App() {
const[loading, setLoadin] =useState(true)
const dispatch = useDispatch()
  
useEffect(()=>{
  authService. getUserAcc().then((userData)=>{
    if (userData) {
      dispatch(login({data}))
    }else{
      dispatch(logout())}
    })
    .finally(()=>setLoadin(false))
}, [])
  return (
    <>
      <Header/>
      <h1 className="text-3xl font-bold underline">Mega Project</h1>
      <Footer/>
    </>
  )
}

export default App
