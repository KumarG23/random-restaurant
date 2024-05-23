import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from 'react-router-dom'

// project styles
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

import About from './About'
import App from './App'
import ErrorPage from './ErrorPage'
import Header from './Header'
import Footer from './Footer'
import Home from './Home'
import Cart from './Cart'
import { createContext, useState } from 'react'

export const CartContext = createContext();

const site = import.meta.env.BASE_URL


function Layout() {
  const [cart, setCart] = useState([]);

    const addToCart = (item) => {
        const { id, title, price} = item;
        const newItem = { id, title, price}
        console.log('Add item: ', item);
        
        setCart((prevCart)=> {
          const updatedCart = [...prevCart, newItem];
          console.log('updated cart: ', updatedCart);
          return updatedCart;
        })
    };

  return (
      <>
      <CartContext.Provider value={{ cart, addToCart }}>
        <Header />
        <div id='page-content'>
          <Outlet />
        </div>
        <Footer />
      </CartContext.Provider>
      </>
  )
}

const router = createBrowserRouter([
  {
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <App />,
        errorElement: <ErrorPage />
      },
      {
        path: '/about',
        element: <About />
      },
      {
        path: '/home',
        element: <Home />
      },
        {path: '/cart',
        element: <Cart />}
    ]
  }
], {
  basename: site
})

ReactDOM.createRoot(document.getElementById('root')).render(
  
    <RouterProvider router={router} />
);
