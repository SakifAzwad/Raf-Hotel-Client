import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root';
import ErrorPage from './components/Error/ErrorPage';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import SignUp from './components/SignUp/SignUp';
import Rooms from './components/Rooms/Rooms';
import AboutUs from './components/AboutUs';
import MyBookings from './components/MyBookings/MyBookings';
import AuthProv from './components/Provider/AuthProv';
import PrivateRoute from './Private/PrivateRoute';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      {
        path:"/",
        element:<Home></Home>,
      },
      {
        path:"/rooms",
        element:<Rooms></Rooms>,
        loader :()=>fetch('http://localhost:5000/rooms')

      },
      {
        path:"/mybookings",
        element:<PrivateRoute><MyBookings></MyBookings></PrivateRoute>
      },
      {
        path:"/aboutus",
        element:<AboutUs></AboutUs>,
      },
      {
        path:"/login",
        element: <Login></Login>,
      },
      {
        path:"/signup",
        element:<SignUp></SignUp>
      }
    ]
  },

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProv>
    <RouterProvider router={router} />
    </AuthProv>
  </React.StrictMode>,
)
