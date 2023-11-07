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
      },
      {
        path:"/mybookings",
        element:<MyBookings></MyBookings>
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
    <RouterProvider router={router} />
  </React.StrictMode>,
)
