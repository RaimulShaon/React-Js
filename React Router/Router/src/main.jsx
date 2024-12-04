import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom"
import Layout from './layout.jsx'
import Home from './components/Home/Home.jsx'
import AboutUs from './components/About us/AboutUs.jsx'
import ContactUs from './components/Contact/ContactUs.jsx'
import Users from './components/User/User.jsx'
import Github from './components/Github/github.jsx'


// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Layout />,
//     children: [
//       {
//         path: "",
//         element: <Home/>
//       },
//       {
//         path: "about",
//         element: <AboutUs/>
//       },
//       {
//         path: "contactUs",
//         element: <ContactUs/>
//       }
//     ]
//   }
// ])

//modify routs
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path= '/' element = {<Layout/>}>
    <Route path= '' element = {<Home/>}/>
    <Route path= 'about' element = {<AboutUs/>}/>
    <Route path= 'contactUs' element = {<ContactUs/>}/>
    <Route path= 'user/:userId' element = {<Users/>}/>
    <Route  path= 'Github' element = {<Github/>}/>

    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider  router={router}/>
  </StrictMode>,
)
