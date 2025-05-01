import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Root from './Layouts/Root'
import Home from './Components/Home/Home'
import Login from './Auth/Login/Login'
import Register from './Auth/Register/Register'
import AuthProvider from './AuthContext/AuthProvider'
import Order from './Components/Order/Order'
import PrivateRoute from './Routs/PrivateRoute/PrivateRoute'
import Profile from './Components/Profile/Profile'
import DashBoard from './Components/Dashboard/DashBoard'

const router = createBrowserRouter([
  {
    path: '/',
    Component: Root,
    children: [
      {
        index: true,
        Component: Home
      },
      {
        path: 'login',
        Component: Login
      },
      {
        path: 'register',
        Component: Register
      },
      {
        path: '/order',
        element: <PrivateRoute>
          <Order></Order>
        </PrivateRoute>
      },
      {
        path: 'profile',
        element: <PrivateRoute>
          <Profile></Profile>
        </PrivateRoute>
      },
      {
        path: 'dashboard',
        element: <PrivateRoute><DashBoard></DashBoard></PrivateRoute>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </StrictMode>,
)
