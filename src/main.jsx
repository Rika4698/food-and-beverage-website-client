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
import Contact from './components/Contact/Contact';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import DetailsSet from './components/DetailsSet/DetailsSet';
import Update from './components/Update/Update';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<ErrorMessage></ErrorMessage>,
    
    children:[
  {
    path:'/',
    element:<Home></Home>,
    loader: () => fetch('https://food-beverage-website-server-k6rm4v00w.vercel.app/product'),
   
    
  },
  {
      path:'/add-product',
      element:<PrivateRoute><AddProduct></AddProduct></PrivateRoute>,
    
     
  },
  {
      path:'/cart',
      // element:<Cart></Cart>,
      
  },
  {
     path:'/product/:brand',
     element:<BrandDetailSet></BrandDetailSet>,
     loader: () => fetch('https://food-beverage-website-server-k6rm4v00w.vercel.app/product'),
     

  },
  {
    path:'/details/:_id',
    element:<PrivateRoute><DetailsSet></DetailsSet></PrivateRoute>,
    loader: () => fetch('https://food-beverage-website-server-k6rm4v00w.vercel.app/product'),
  },
  {
    path:'/update/:id',
    element:<PrivateRoute><Update></Update></PrivateRoute>,
    loader: ({params}) => fetch(`https://food-beverage-website-server-k6rm4v00w.vercel.app/product/${params.id}`),
  },
  {
    path:'/contact',
    element:<Contact></Contact>,
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
