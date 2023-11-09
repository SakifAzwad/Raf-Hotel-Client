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
import RoomDetails from './components/RoomDetails/RoomDetails';
import UpdateRoom from './components/UpdateRoom.jsx/UpdateRoom';
import Reviews from './components/Reviews/Reviews';

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
        path:"/rooms/:id",
        element:<RoomDetails></RoomDetails>,
        loader :({params})=>fetch(`http://localhost:5000/rooms/${params.id}`)

      },
      {
        path:"/update/:id",
        element:<PrivateRoute><UpdateRoom></UpdateRoom></PrivateRoute>,
        loader :({params})=>fetch(`http://localhost:5000/update/${params.id}`)

      },
      {
        path:"/mybookings",
        element:<PrivateRoute><MyBookings></MyBookings></PrivateRoute>,
        loader:()=>fetch('http://localhost:5000/bookings')
      },
      {
        path:"/review/:id",
        element:<PrivateRoute><Reviews></Reviews></PrivateRoute>,
        loader :({params})=>fetch(`http://localhost:5000/rooms/${params.id}`)
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
