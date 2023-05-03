import { useContext } from 'react'
import { Link, Navigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { AuthContext } from '../../context/AuthProvider'

const Login = () => {
  const { user, setUser, signInWithGoogle, signInWithGH, signInWithEmail } =
    useContext(AuthContext)
  if (user) {
    return <Navigate to={'/chef'} />
  }
  const handleContinueWithGoogle = () => {
    signInWithGoogle()
      .then((res) => {
        setUser(res)
        toast.success('SignIn Successful With Google')
      })
      .catch((err) => toast.error(err.message))
  }
  const handleContinueWithGH = () => {
    signInWithGH()
      .then((res) => {
        setUser(res)
        toast.success('SignIn Successful With GitHub')
      })
      .catch((err) => toast.error(err.message))
  }
  const handleCreateUserWithEmailAndPassword = (e) => {
    e.preventDefault()
    const formData = e.target
    const email = formData.userEmail.value
    const password = formData.userPassword.value
    signInWithEmail(email, password)
      .then((res) => {
        setUser(res)
        toast.success('SignIn Successful With Email Password')
      })
      .catch((err) => toast.error(err.message))
  }
  return (
    <div className="container mx-auto flex justify-center items-center my-20 px-2">
      <div className="card w-full sm:h-3/4 md:h-3/5 lg:w-2/4 xl:w-1/3 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title mb-4 text-3xl">Login</h2>
          <form onSubmit={handleCreateUserWithEmailAndPassword}>
            <div className="mb-2">
              <label>Enter Your Email</label>
              <input
                type="email"
                placeholder="Type here"
                className="input input-bordered  w-full mt-2"
                name="userEmail"
                required
              />
            </div>
            <div className="mb-2">
              <label>Enter Your Password</label>
              <input
                type="password"
                placeholder="Type here"
                className="input input-bordered  w-full mt-2"
                name="userPassword"
                required
              />
            </div>
            <div className="my-2">
              <p>
                Already have an account?{' '}
                <Link className="text-blue-700 font-bold" to="/register">
                  Register Now.
                </Link>
              </p>
            </div>
            <div className="card-actions">
              <button
                className="btn btn-primary w-full font-bold"
                type="submit"
              >
                Login
              </button>
            </div>
          </form>
          <div className="my-2 border-y-2 border-gray-300 py-2">
            <button
              className="btn w-full mb-2 font-bold bg-blue-500 text-white border-none hover:bg-blue-600 hover:outline-none hover:border-none"
              onClick={handleContinueWithGoogle}
            >
              Continue With Google
            </button>
            <button
              className="btn w-full mb-2 font-bold bg-gray-400 text-white border-none hover:bg-gray-500 hover:outline-none hover:border-none"
              onClick={handleContinueWithGH}
            >
              Continue With GitHub
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
