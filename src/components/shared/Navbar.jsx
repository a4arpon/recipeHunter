const Navbar = () => {
  return (
    <div className="navbar bg-transparent container mx-auto ">
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-xl lg:text-3xl">Chef Recipe Hunter</a>
      </div>
      <div className="dropdown dropdown-end">
        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
          <div className="w-10 rounded-full">
            <img src="https://hips.hearstapps.com/hmg-prod/images/johnnydepp.jpg?resize=240:*" />
          </div>
        </label>
        <ul
          tabIndex={0}
          className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52 font-extrabold"
        >
          <li>
            <a>Arpon</a>
          </li>
          <li>
            <a>Logout</a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
