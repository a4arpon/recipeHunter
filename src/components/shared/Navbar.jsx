import { useContext } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { AuthContext } from '../../context/AuthProvider'

const Navbar = () => {
  const { user, logout } = useContext(AuthContext)
  return (
    <div className="navbar bg-transparent container mx-auto justify-between">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? 'font-bold mx-2 active' : 'font-bold mx-2'
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/blog"
                className={({ isActive }) =>
                  isActive ? 'font-bold mx-2 active' : 'font-bold mx-2'
                }
              >
                Blog
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/aboutUs"
                className={({ isActive }) =>
                  isActive ? 'font-bold mx-2 active' : 'font-bold mx-2'
                }
              >
                About Us
              </NavLink>
            </li>
          </ul>
        </div>
        <Link
          to="/"
          className="btn btn-ghost hover:bg-transparent text-xl lg:text-3xl font-bold"
        >
          BuckDonald&apos;s
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? 'font-bold mx-2 active' : 'font-bold mx-2'
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/blog"
              className={({ isActive }) =>
                isActive ? 'font-bold mx-2 active' : 'font-bold mx-2'
              }
            >
              Blog
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/aboutUs"
              className={({ isActive }) =>
                isActive ? 'font-bold mx-2 active' : 'font-bold mx-2'
              }
            >
              About Us
            </NavLink>
          </li>
        </ul>
      </div>
      <div>
        {user
          ? (
            // If any user is logged in then his profile pic and actions will be visible
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src={user.photoURL} title={user.displayName} />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52 font-extrabold"
            >
              <li>
                <Link to="/profile">{user.displayName} Profile</Link>
              </li>
              <li>
                <button onClick={logout}>Logout</button>
              </li>
            </ul>
          </div>
            )
          : (
            // If any user is not logged in then login button will be visible
          <Link to="/login" className="btn btn-primary font-bold">
            Login
          </Link>
            )}
      </div>
    </div>
  )
}

export default Navbar
