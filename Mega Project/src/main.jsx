import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import store from './Store/Store.js'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AuthProtectedStatus from './Component/AuthStatus.jsx'
import Homes from './Pages/Home.jsx'
import Addpost from "./Pages/Addpost.jsx"
import SignUps from './Pages/SignUp.jsx'
import Allpost from './Pages/Allpost.jsx'
import EditPost from './Pages/EditPost.jsx'
import Loging from './Pages/Login.jsx'
import Post from './Pages/post.jsx'


const router =createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children:[
      {path: "/",
      element: <Homes />  
      },
      {
        path: "/login",
        element:(
          <AuthProtectedStatus authintacation={false}>
            <Loging/>
          </AuthProtectedStatus>
        )
      },
      {
        path: "/signup",
        element:(
          <AuthProtectedStatus authintacation ={false} >
            <SignUps/>
          </AuthProtectedStatus>
        )
      },
      {
        path: "/allposts",
        element:(
          <AuthProtectedStatus authintacation ={false} >
            {" "}
            <Allpost/>
          </AuthProtectedStatus>
        )
      },
      {
        path: "/addposts",
        element:(
          <AuthProtectedStatus authintacation ={false} >
            {" "}
            <Addpost/>
          </AuthProtectedStatus>
        )
      },
      {
        path: "/editposts",
        element:(
          <AuthProtectedStatus authintacation ={false} >
            {" "}
            <EditPost/>
          </AuthProtectedStatus>
        )
      },
      {
        path: "/post/:slug",
        element: <Post/>
      },
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
    <RouterProvider router={router} />
    </Provider>
  </StrictMode>,  
)
