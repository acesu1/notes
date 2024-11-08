import { createBrowserRouter } from 'react-router-dom'
import { Layout } from './pages/_layouts/layout'
import { Dashboard } from './pages/dashboard'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Dashboard />,
      },
    ],
  },
])
