import { useContext } from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'
import { AuthContext } from '../../context/AuthProvider'
const Profile = () => {
  const { user } = useContext(AuthContext)
  return (
    <div className="container mx-auto my-20 px-5">
      <div className="card card-compact w-full bg-gray-100 shadow-xl">
        <div className="card-body">
          <h1 className="border-b-2 pb-2 mb-4 text-2xl font-bold">
            My Profile
          </h1>
          <div className="flex flex-col-reverse md:flex-row md:justify-between">
            <div>
              <h2 className="card-title">Name: {user.displayName}</h2>
              <p className="my-1 font-semibold text-xl">
                Email: {user?.email || 'Not Provided'}
              </p>
              <p className="my-1 font-semibold text-xl">
                Phone: {user?.phoneNumber || 'Not Provided'}
              </p>
            </div>
            <div className="">
              <LazyLoadImage
                src={user?.photoURL}
                className="w-full max-h-96 mb-4 p-2 rounded-3xl"
                effect="blur"
                height="100%"
                width="100%"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile
