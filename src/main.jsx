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
import SignIn from './components/SignIn.jsx'
import SignUp from './components/SignUp.jsx'
import AuthProvider from './contexts/AuthProvider.jsx'
import Users from './components/Users.jsx'
import Loader from './components/Loader.jsx'
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import Users2 from './components/Users2.jsx'

// Create a client
const queryClient = new QueryClient()

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        index: true,
        loader: () => fetch("https://coffe-store-server-sooty.vercel.app/coffees"),
        Component: Home,
        hydrateFallbackElement: <Loader></Loader>
      },
      {
        path: 'addCoffe',
        Component: AddCoffe
      },
      {
        path: "/coffees/:id",
        loader: ({ params }) => fetch(`https://coffe-store-server-sooty.vercel.app/coffees/${params.id}`),
        element: <DetailsCoffee></DetailsCoffee>,

      },
      {
        path: "updateCoffee/:id",
        loader: ({ params }) => fetch(`https://coffe-store-server-sooty.vercel.app/coffees/${params.id}`),
        Component: UpdateCoffe,
        hydrateFallbackElement: <Loader></Loader>
      },
      {
        path: "signin",
        Component: SignIn
      },
      {
        path: "signup",
        Component: SignUp
      },
      {
        path: "users",
        loader: () => fetch("https://coffe-store-server-sooty.vercel.app/users"),
        Component: Users,
        hydrateFallbackElement: <Loader></Loader>
      },
      {
        path: "users2",
        Component: Users2,
        hydrateFallbackElement: <Loader></Loader>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <RouterProvider router={router}></RouterProvider>
      </AuthProvider>
    </QueryClientProvider>
  </StrictMode>,
)
