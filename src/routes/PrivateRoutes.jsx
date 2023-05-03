import { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import Loader from '../components/shared/Loader'
import { AuthContext } from '../context/AuthProvider'

const PrivateRoutes = ({ children }) => {
  const { user, loading } = useContext(AuthContext)
  if (user) {
    return children
  } else if (loading) {
    return <Loader/>
  } else {
    return <Navigate to={'/login'} replace />
  }
}
export default PrivateRoutes
