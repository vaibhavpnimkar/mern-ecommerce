import React from 'react';

import Home from './pages/Home';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import Cart from './features/carts/Cart';
import Checkout from './pages/Checkout';
import ProductPage from './pages/ProductPage';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";



const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home> ,
  },
  {
    path: "/login",
    element:<LoginPage></LoginPage> ,
  },
  {
    path: "/signup",
    element:<SignUpPage></SignUpPage> ,
  },

  {
    path: "/carts",
    element:<Cart></Cart>,
  },
  {
    path: "/checkout",
    element:<Checkout></Checkout>,
  },
  {
    path: "/products",
    element:<ProductPage></ProductPage>,
  },
]);

function App() {
  return (
    <div className="App">
  <RouterProvider router={router} />
    </div>
  );
}

export default App;
