import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup } from 'firebase/auth'
import { createContext, useEffect, useState } from 'react'
import firebaseApp from '../_firebase/Firebase.conf'

const firebaseAuth = getAuth(firebaseApp)
export const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  // Firebase signIn with Google
  const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider()
    setLoading(true)
    return signInWithPopup(firebaseAuth, provider)
  }
  useEffect(() => {
    const unsubscribeUser = onAuthStateChanged(firebaseAuth, (currentUser) => {
      setUser(currentUser)
      setLoading(false)
    })
    return () => {
      unsubscribeUser()
    }
  }, [])
  // Context function and value container
  const auth = {
    user,
    setUser,
    loading,
    signInWithGoogle
  }

  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>
}
export default AuthProvider
