import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className="container mx-auto flex justify-center items-center my-20 px-2">
      <div className="card w-full sm:h-3/4 md:h-3/5 lg:w-2/4 xl:w-1/3 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title mb-4 text-3xl">Login</h2>
          <div className="mb-2">
            <label>Enter Your Email</label>
            <input
              type="email"
              placeholder="Type here"
              className="input input-bordered  w-full mt-2"
            />
          </div>
          <div className="mb-2">
            <label>Enter Your Password</label>
            <input
              type="password"
              placeholder="Type here"
              className="input input-bordered  w-full mt-2"
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
            <button className="btn btn-primary w-full font-bold">Login</button>
          </div>
          <div className="my-2 border-y-2 border-gray-300 py-2">
            <button className="btn w-full mb-2 font-bold bg-blue-500 text-white border-none hover:bg-blue-600 hover:outline-none hover:border-none">
              Continue With Google
            </button>
            <button className="btn w-full mb-2 font-bold bg-gray-400 text-white border-none hover:bg-gray-500 hover:outline-none hover:border-none">
              Continue With GitHub
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
