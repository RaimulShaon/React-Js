import { useCallback, useEffect, useRef, useState } from 'react'
import './App.css'

function App() {
  const [lenth, setLenth] = useState(8)
  const [Number, setNumber ]= useState(false)
  const [Character, setCharacter]= useState(false)
  const [Password, setPassword] = useState("")
  const [color, setColor] = useState("")

  const passRef = useRef(Password)

  const passwordGenarator = useCallback(() =>{
    let pass= "";
    let str ="QWERTYUIOPLKJHGFDSAZXCVBNMqwertyuioplkjhgfdsazxcvbnm"
    if (Number) str += "0123456789"
    if (Character) str += "~!@#$%^&*"
    for (let i = 1; i <= lenth; i++) {
      const char = Math.floor(Math.random() * str.length +1)
      pass += str.charAt(char)
    }
    setPassword(pass)
  }, [lenth, Number, Character, setPassword])

  const copyPassword= useCallback(()=>{
    passRef.current?.select()
    window.navigator.clipboard.writeText(Password)
  }, [Password])

  useEffect(()=> {passwordGenarator()}, [lenth, Number, Character, passwordGenarator])
  return (
    <>
    <div className="w-full h-screen duration-200"
    style={{backgroundColor: color}}
    >
    <button 
          onClick={() => setColor("#7575a3")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg my-3"
          style={{backgroundColor: "gray"}}
          >Blue</button>
          
      <h1 className='text-3xl font-bold underline bg-black text-emerald-500 p-2'>Password Genarator</h1>
      <div className='w-full p-6 my-4 max-w-md mx-auto text-orange-500 bg-gray-700 rounded-lg'>
        <div className='flex justify-between '>
          <input type="text " value={Password}
          className='rounded-md mb-4 w-3/4 py-2' placeholder='password' readOnly ref={passRef} />
        <button onClick={copyPassword} className='rounded-md bg-lime-400 w-1/4 h-10 mx-2 text-black font-bold hover:bg-lime-200'>Copy</button>
        </div>
        <div className='flex w-full '>
          <div className='flex items-center gap-x-2'>
            <input type="range" min={6} max={20} className='cursor-pointer w-1/2' onChange={(e)=>{setLenth(e.target.value) }} />     
            
            <label >Lenth:{lenth}</label>
          </div>
          <div className= 'flex w-1/3 gap-x-2 '>
            <input type="checkbox" defaultChecked = {Number}
            onChange={()=>{setNumber((prev)=> !prev)}} />
            <label >Numbers</label>
          </div>
          <div className= 'flex w-1/3  gap-x-2'>
            <input type="checkbox" defaultChecked = {Character}
            onChange={()=>{setCharacter((prev)=> !prev)}} />
            <label >Charecter</label>
          </div>
        </div>
      </div>
      </div>
    </>
  )
}

export default App
