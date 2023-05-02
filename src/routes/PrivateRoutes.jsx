import { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { AuthContext } from '../context/AuthProvider'
import Loading from '../pages/loading/Loading.jsx'

const PrivateRoutes = ({ children }) => {
  const { user, loading } = useContext(AuthContext)
  if (user) {
    return children
  } else if (loading) {
    return <Loading/>
  } else {
    return <Navigate to={'/login'} replace />
  }
}
export default PrivateRoutes
