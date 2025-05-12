import React from 'react';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './component/Layout';
import Home from './component/Home';
import About from './component/About';
import Contact from './component/Contact';
import ErrorPage from './component/ErrorPage';
import'./component/Style.css'


function App() {
 const Routes= createBrowserRouter([
  {
   path:'/', 
   element:<Layout/>,
   errorElement:<ErrorPage/>,
   children:[
    {index:true,element:<Home/> },
    { path: 'about', element: <About /> },
    {path:'contact',element:<Contact/>}
   ]
  }
 ])
  return (
    <>
   <RouterProvider router={Routes}/>
    </>
  )
}



export default App
