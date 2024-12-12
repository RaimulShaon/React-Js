import UserContextProvider from "./UserProvider"
import Login from "./Components/login"
import Profile from "./Components/profile"
import "./App.css"
function App() {


  return (
    <UserContextProvider>
     <h1>User login </h1>
     <Login/>
     <Profile/>
    </UserContextProvider>
  )
}

export default App

