import { createBrowserRouter } from 'react-router-dom'
import MainLayout from '../layouts/MainLayout'
import Login from '../pages/auth/Login'
import Register from '../pages/auth/Register'
import Chef from '../pages/chef/Chef'
import Error from '../pages/error/Error'
import Home from '../pages/home/Home'
import PrivateRoutes from './PrivateRoutes'

const Routes = createBrowserRouter([
  {
    path: '/',
    // element: <PrivateRoutes><Home/></PrivateRoutes>,
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
