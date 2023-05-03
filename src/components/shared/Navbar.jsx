import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../context/AuthProvider'

const Navbar = () => {
  const { user, logout } = useContext(AuthContext)
  return (
    <div className="navbar bg-transparent container mx-auto ">
      <div className="flex-1">
        <Link
          to="/"
          className="btn btn-ghost hover:bg-transparent text-xl lg:text-3xl font-bold"
        >
          BuckDonald&apos;s
        </Link>
      </div>
      {user
        ? (
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img
                src="https://hips.hearstapps.com/hmg-prod/images/johnnydepp.jpg?resize=240:*"
                title={user.displayName}
              />
            </div>
          </label>
          <ul
            tabIndex={0}
            className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52 font-extrabold"
          >
            <li>
              <Link>{user.displayName} Profile</Link>
            </li>
            <li>
              <button onClick={logout}>Logout</button>
            </li>
          </ul>
        </div>
          )
        : (
        <Link to="/login" className="btn btn-primary font-bold">
          Login
        </Link>
          )}
    </div>
  )
}

export default Navbar
