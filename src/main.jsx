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
 * 5. Add Btn add/delete functionality using arr of obj useState:
 * 6. Update Shop page cards Btns to be dynamic
 * 7. get icons for cart, home and shop pages
 * 8. beautify Cart page
 * 
 * 
For shop page, pull from the memory-game
for welcome page, pull from sign-up. Change that set up to React and use Grid

Cart- i need to do myself because I never did ToDo properly. ul li works fine IMO
 *
also need useNavigate???? 
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
