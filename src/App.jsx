import { useState } from 'react'
import reactLogo from './assets/react.svg'
import {createBrowserRouter, RouterProvider, Route} from 'react-router-dom'
import './App.css'
import './nav.css'
import './Checkout.css'
import './shoePage.css'
import './home.css'
import ShoesPage from './components/ShoesPage'
import Shoe from './components/Shoe'
import { Home } from './components/Homepage'
import { RootLayout } from './Root'
import CheckoutForm from './components/Checkout'
import { NavBar } from './components/Nav'

function App() {
  const router = createBrowserRouter([
    {
      path:"/",
      element: <RootLayout/>,
      children:[
        {
          path:"/",
          element: <Home/>
        },
        {
          path:"/shoesPage",
          element:<ShoesPage/>
        },
        {
          path:"/shoe/:id",
          element:<Shoe/>
        },
        {
          path:"/checkout",
          element:<CheckoutForm/>
        }
      ]
    },
  ])

  return (
    <div className="App">
        <RouterProvider router={router}/>
        {/* <ShoesPage/> */}
    </div>
  )
}

export default App
