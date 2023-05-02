import { createBrowserRouter } from 'react-router-dom'
import Login from '../pages/auth/Login'
import Register from '../pages/auth/Register'
import Error from '../pages/error/Error'
import Home from '../pages/home/Home'

const Routes = createBrowserRouter([
  {
    path: '/',
    // element: <PrivateRoutes><Home/></PrivateRoutes>,
    element: <Home />,
    loader: () =>
      fetch(
        'https://b7a10-chef-recipe-hunter-server-side-a4arpon-a4arpon.vercel.app/'
      ),
    errorElement: <Error />
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/register',
    element: <Register />
  }
])
export default Routes
