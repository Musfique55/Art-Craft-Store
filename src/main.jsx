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

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    errorElement : <ErrorPage></ErrorPage>,
    children : [
      {
        path : '/',
        element : <App></App>
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
        path: '/add-items',
        element : <AddItems></AddItems>
      },
      {
        path : '/mylist',
        element : <MyList></MyList>,
      },
      {
        path : '/update/:id',
        element : <Update></Update>
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
