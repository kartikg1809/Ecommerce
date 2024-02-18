import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Home } from './pages/home/Home.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import SingleProduct from './pages/Product/SingleProduct.jsx'
import { CategoryPage } from './pages/CategoryPage/CategoryPage.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: "/",
        element:<Home/>,
      },
      {
        path:"shop/:id",
        element:<SingleProduct/>
      },
      {
        path:"category/:id",
        element:<CategoryPage/>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
