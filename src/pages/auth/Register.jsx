import { useContext } from 'react'
import { Link, Navigate, useLocation } from 'react-router-dom'
import { toast } from 'react-toastify'
import { AuthContext } from '../../context/AuthProvider'

const Register = () => {
  const {
    user,
    setUser,
    signInWithGoogle,
    signInWithGH,
    signUpWithEmail,
    updateUserName
  } = useContext(AuthContext)
  // For navigation form previous page and redirect to it while login is successful
  const location = useLocation()
  const from = location.state?.from || '/'
  if (user) {
    return <Navigate to={from} replace />
  }
  // This function handle Register with google action
  const handleContinueWithGoogle = () => {
    signInWithGoogle()
      .then((res) => {
        setUser(res)
        toast.success('SignIn Successful With Google')
      })
      .catch((err) => toast.error(err.message))
  }
  // This function handle Register with Github action
  const handleContinueWithGH = () => {
    signInWithGH()
      .then((res) => {
        setUser(res)
        toast.success('SignIn Successful With GitHub')
      })
      .catch((err) => toast.error(err.message))
  }
  // This function handle Register with email and password
  const handleCreateUserWithEmailAndPassword = (e) => {
    // Prevent form default action
    e.preventDefault()
    const formData = e.target
    // extract email and password from Form
    const name = formData.userName.value
    const email = formData.userEmail.value
    const password = formData.userPassword.value
    // validate password with regx
    if (/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/.test(password)) {
      signUpWithEmail(email, password)
        .then((usr) => {
          setUser(usr)
          // Update user name while user is created on firebase
          updateUserName(name)
            .then(toast.success('SignUp With Email And Password Successful.'))
            .catch((err) => toast.warn(err.message))
        })
        .catch((err) => toast.error(err.message))
    } else {
      // if the password is under 6 chars or not matched with regx it shows warning to user
      toast.warning(
        'Password must contains at last one numerical digit, one capital and one small letter. Between 6 to 20 Characters.'
      )
    }
  }

  return (
    <div className="container mx-auto flex justify-center items-center my-20 px-2">
      <div className="card w-full sm:h-3/4 md:h-3/5 lg:w-2/4 xl:w-1/3 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title mb-4 text-3xl">Register</h2>
          <form onSubmit={handleCreateUserWithEmailAndPassword}>
            <div className="mb-2">
              <label>Enter Your Name</label>
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered  w-full mt-2"
                name="userName"
                required
              />
            </div>
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
            <div className="mb-2">
              <label>Enter Your Photo</label>
              <input
                type="file"
                className="file-input file-input-bordered w-full mt-2 file-input-primary focus:outline-none"
              />
            </div>
            <div className="my-3">
              <p>
                Already have an account?{' '}
                <Link className="text-blue-700 font-bold underline" to="/login">
                  Login Now.
                </Link>
              </p>
            </div>
            <div className="card-actions">
              <button
                className="btn btn-primary w-full font-bold"
                type="submit"
              >
                Register
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

export default Register
