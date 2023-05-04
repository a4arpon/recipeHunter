const Profile = () => {
  const profile = {}
  return (
    <div className="container mx-auto my-20 px-5">
      <div
        className="card card-compact w-full bg-gray-100 shadow-xl"
        key={profile.id}
      >
        <div className="card-body">
          <h1 className="border-b-2 pb-2 mb-4 text-2xl font-bold">
            My Profile
          </h1>
          <h2 className="card-title">product.name.substring(0, 30)...</h2>
          <p className="my-1 font-semibold">Price: </p>
          <div className="card-actions justify-end mt-auto">
            <button className="btn btn-primary font-bold text-white">
              Save Now
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile
