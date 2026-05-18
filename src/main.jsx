import { StrictMode, useState } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router'
import './index.css'
import Root from './routes/Root.jsx'
import PageRoutes from './routes/PageRoutes.jsx'
import ErrorPage from './helper/ErrorPage.jsx'
import Home from './pages/Home.jsx'

/**
 * Things to do:
 * Beautify using material-UI & google fonts
 * https://mui.com/material-ui/react-button/
 * https://mui.com/material-ui/getting-started/usage/
 * https://fonts.google.com/icons?icon.set=Material+Icons&icon.query=store
 * 
 * 6. Update Shop page cards Btns to be dynamic
 * 7. get icons for cart, home and shop pages
 * 8. beautify Cart page
 * 
for welcome page, pull from sign-up. Change that set up to React and use Grid

In the end, don't forget to add image to cart li
  <div className="cartImgDiv">
    <img src={obj.image} alt={`Image of ${obj.title}`} />
  </div>

also need useNavigate???? May not be needed https://reactrouter.com/api/hooks/useNavigate
 
Issues to fix if in mood:
Make the display div thing persistent using states because they reset when you switch pages
something wrong with Cart/Product arrays. If you add/update many times, it duplicates the products in cart array. why?
*/


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      {
        errorElement: <ErrorPage />,
        path: ":name",
        element: <PageRoutes />,
      },
    ],
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
