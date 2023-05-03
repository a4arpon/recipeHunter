import { useContext } from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import Loader from '../components/shared/Loader'
import { AuthContext } from '../context/AuthProvider'

const PrivateRoutes = ({ children }) => {
  const { user, loading } = useContext(AuthContext)
  const location = useLocation()
  if (user) {
    return children
  } else if (loading) {
    return <Loader />
  } else {
    return <Navigate to={'/login'} replace state={{ from: location }} />
  }
}
export default PrivateRoutes
