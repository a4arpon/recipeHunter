import { createBrowserRouter } from 'react-router-dom'
import MainLayout from '../layouts/MainLayout'
import AboutUs from '../pages/about-us/AboutUs'
import Login from '../pages/auth/Login'
import Register from '../pages/auth/Register'
import Blog from '../pages/blog/Blog'
import Chef from '../pages/chef/Chef'
import Error from '../pages/error/Error'
import Home from '../pages/home/Home'
import PrivateRoutes from './PrivateRoutes'

const Routes = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { path: '/', element: <Home /> },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/register',
        element: <Register />
      },
      {
        path: '/blog',
        element: <Blog />
      },
      {
        path: '/aboutUs',
        element: <AboutUs />
      },
      {
        path: '/chef/:chefID',
        element: (
          <PrivateRoutes>
            <Chef />
          </PrivateRoutes>
        )
      }
    ],
    errorElement: <Error />
  }
])
export default Routes
