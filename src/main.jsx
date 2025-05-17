import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import MainLayout from './layouts/MainLayout.jsx'
import Home from './components/Home.jsx'
import AddCoffe from './components/AddCoffe.jsx'
import UpdateCoffe from './components/UpdateCoffe.jsx'
import DetailsCoffee from './components/DetailsCoffee.jsx'


const router = createBrowserRouter([
  {
    path : "/",
    element : <MainLayout></MainLayout>,
    children : [
      {
        index : true,
        loader : ()=>fetch("http://localhost:3000/coffees"),
        Component : Home
      },
      {
        path : 'addCoffe',
        Component : AddCoffe
      },
      {
        path : "/coffees/:id",
        loader : ({params})=>fetch(`http://localhost:3000/coffees/${params.id}`),
        element : <DetailsCoffee></DetailsCoffee>
        
      },
      {
        path : "updateCoffee/:id",
        loader : ({params})=>fetch(`http://localhost:3000/coffees/${params.id}`),
        Component : UpdateCoffe
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
