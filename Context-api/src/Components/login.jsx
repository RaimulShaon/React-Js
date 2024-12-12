import { useContext, useState } from "react"
import UserContext from "../Context/UserContext"
 

function Login() {
    const [userName, setUserName] = useState()
    const [Password, setPassword]=useState()

    const {setUser} = useContext(UserContext)
    
    const handleSubmit = (e) =>{
        e.preventDefault()
        setUser({userName, Password})
    }
    return (
      <div>
       <h1>Login</h1>
       <input type="text" value={userName} onChange={(e) => setUserName(e.target.value)} placeholder="UserName" /> <br /> <br />
       <input type="text" value={Password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" /> <br /> <br/>
       <button type="submit" onClick={handleSubmit }>Submit</button>
      </div>
    )
  }
  
  export default Login
  