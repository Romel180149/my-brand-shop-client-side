import React, { Children } from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
// import Navbar from './Navbar/Navbar.jsx';
// import Footer from './Navbar/Footer/Footer.jsx';
import Root from './Root/Root.jsx';

import Home from './HomePage/Home.jsx';
import Error from './ErrorPage/Error.jsx';
const router = createBrowserRouter([
 
  {
    path:"/",
    element:<Root></Root>,
    errorElement:<Error></Error>,

    children:[
      {
          path:"/home",
          element:<Home></Home>,
      },
     
    ]
  },
 
  ]
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
