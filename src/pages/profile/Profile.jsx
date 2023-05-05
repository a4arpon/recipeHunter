import { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const Profile = () => {
  const { user } = useContext(AuthContext)
  console.log(user)
  return (
    <div className="container mx-auto my-20 px-5">
      <div className="card card-compact w-full bg-gray-100 shadow-xl">
        <div className="card-body">
          <h1 className="border-b-2 pb-2 mb-4 text-2xl font-bold">
            My Profile
          </h1>
          <h2 className="card-title">Name: </h2>
          <p className="my-1 font-semibold text-xl">Email: </p>
          <p className="my-1 font-semibold text-xl">Phone: </p>
        </div>
      </div>
    </div>
  )
}

export default Profile
