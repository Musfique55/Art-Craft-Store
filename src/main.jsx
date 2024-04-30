import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from './Components/Layout.jsx';
import Register from './Components/Register.jsx';
import AuthProvider from './Components/AuthProvider.jsx';
import Login from './Components/Login.jsx';
import ErrorPage from './Components/ErrorPage.jsx';
import AddItems from './Components/AddItems.jsx';
import MyList from './Components/MyList.jsx';
import Update from './Components/Update.jsx';
import ProtectedRoutes from './Components/ProtectedRoutes';
import Details from './Components/Details.jsx';
import Allitems from '../Allitems.jsx';
import CurrentCategory from './Components/CurrentCategory.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    errorElement : <ErrorPage></ErrorPage>,
    children : [
      {
        path : '/',
        element : <App></App>,
      },
      {
        path : '/details/:id',
        element : <ProtectedRoutes><Details></Details></ProtectedRoutes>,
        loader : ({params}) => fetch(`https://art-craft-store-server-rose.vercel.app/crafts/${params.id}`)
      },
      {
        path : '/register',
        element : <Register></Register>
      },
      {
        path : '/login',
        element : <Login></Login>
      },
      {
        path : '/allitems',
        element : <Allitems></Allitems>,
      },
      {
        path: '/add-items',
        element : <ProtectedRoutes><AddItems></AddItems></ProtectedRoutes>
      },
      {
        path : '/mylist',
        element : <ProtectedRoutes><MyList></MyList></ProtectedRoutes>,
      },
      {
        path : '/update/:id',
        element : <ProtectedRoutes><Update></Update></ProtectedRoutes>,
        loader : ({params}) => fetch(`https://art-craft-store-server-rose.vercel.app/crafts/${params.id}`)
      },
      {
        path : '/subcategory/:category',
        element : <CurrentCategory></CurrentCategory>,
        loader : ({params}) => fetch(`https://art-craft-store-server-rose.vercel.app/items/${params.category}`)
      }
    ]
  },
  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </React.StrictMode>,
)
