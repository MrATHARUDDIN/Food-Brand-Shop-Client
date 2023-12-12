import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import About from './Components/About/About.jsx';
import AddProduct from './Components/AddProduct/AddProduct.jsx';
import Home from './Components/Home/Home.jsx';
import Myorder from './Components/Myorder/Myorder.jsx';
import Login from './authentication/Login.jsx';
import SignUp from './authentication/SignUp.jsx';
import Private from './authentication/Private.jsx';
import Service from './Components/Service/Service.jsx';
import Details from './Components/Detailt Brand/Details.jsx';
import Contact from './Components/Contuct/Contuct.jsx';
import Update from './Update/Update.jsx';
import Error from './Components/Error Page/Error.jsx';
import Views from './View/Views.jsx';
import Community from './Components/Community/Community.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <Error></Error>,
    children:[
      {
        path: "/about",
        element: <About></About>
      },
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path:'/order',
        element: <Myorder></Myorder>,
        loader: () => fetch('https://server-side-7l1uxphj9-atharuddins-projects.vercel.app/orders')
      },
      {
        path:'/addproduct',
        element:<AddProduct></AddProduct>
      },
      {
        path:'/Login',
        element:<Login></Login>
      },
      {
        path:'/signup',
        element:<SignUp></SignUp>
      },
      {
        path: '/Service',
        element: <Service></Service>
      },
      {
        path: `/Brand/:brand_name`,
        element: <Details></Details>,
        loader : ({params}) =>  fetch(`https://server-side-7l1uxphj9-atharuddins-projects.vercel.app/product/${params.brand_name}`)
      },
      {
        path: `/Contact`,
        element: <Contact></Contact>
      },
      {
        path: `/community`,
        element: <Community></Community>
      },
      {
        path:'/update/:id',
        element:<Update></Update>,
        loader: ({params}) => fetch(`https://server-side-7l1uxphj9-atharuddins-projects.vercel.app/products/${params.id}`)
      },
      {
        path:'/view/:id',
        element: <Views></Views>,
        loader: ({params}) => fetch(`https://server-side-7l1uxphj9-atharuddins-projects.vercel.app/products/${params.id}`)
      },
    
    ],
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Private>
    <RouterProvider router={router} />
    </Private>
  </React.StrictMode>,
)
