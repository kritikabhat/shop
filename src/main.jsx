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
  check all the onclick actions in cart again. They are breaking
  even increase decrease is not working because some error in total

Fix at the end:
When it loads at root, home should open. It is blank. Home only opens when you go to /home
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
