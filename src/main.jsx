import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root';


import ErrorMessage from './components/ErrorMessage/ErrorMessage';

import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import AuthProvider from './Hook/AuthProvider';
import AddProduct from './components/AddProduct/AddProduct';
import BrandDetailSet from './components/BrandDeatailSet/BrandDetailSet';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<ErrorMessage></ErrorMessage>,
    
    children:[
  {
    path:'/',
    element:<Home></Home>,
    loader: () => fetch('http://localhost:5000/product'),
   
    
  },
  {
      path:'/add-product',
      element:<AddProduct></AddProduct>,
    
     
  },
  {
      path:'/cart',
      
  },
  {
     path:'/product/:brand',
     element:<BrandDetailSet></BrandDetailSet>,
     loader: () => fetch('http://localhost:5000/product'),
     

  },
  {
    path:'/login',
    element:<Login></Login>,
  },
  {
    path:"/register",
    element:<Register></Register>,
  }

    ],
  },
 
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <AuthProvider>
     <RouterProvider router={router} />
     </AuthProvider>
   
  </React.StrictMode>,
)
