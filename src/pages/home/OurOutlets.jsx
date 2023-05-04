const OurOutlets = () => {
  return (
    <div className="my-20">
      <h1 className="border-b-2 pb-2 mb-4 text-2xl font-bold">Our Outlets</h1>
      <div className="flex flex-col w-full lg:flex-row font-medium">
        <div className=" card bg-base-200 rounded-box w-full p-4">
          <h1 className="text-2xl mb-2 font-semibold">California</h1>
          <p className="mb-3 border-b-2 pb-2 border-gray-400 text-xl">
            580 California St #150
          </p>
          <p className="mb-1 text-lg">Opening Time: 8:30 AM</p>
          <p className="mb-2 text-lg">Closing Time: 11:00 PM</p>
        </div>
        <div className="divider lg:divider-horizontal font-bold">OR</div>
        <div className=" card bg-base-200 rounded-box w-full p-4">
          <h1 className="text-2xl mb-2 font-semibold">Mexico</h1>
          <p className="mb-3 border-b-2 pb-2 border-gray-400 text-xl">
            Miguel Hidalgo, 11520 Ciudad de México
          </p>
          <p className="mb-1 text-lg">Opening Time: 8:00 AM</p>
          <p className="mb-2 text-lg">Closing Time: 11:00 PM</p>
        </div>
        <div className="divider lg:divider-horizontal font-bold">OR</div>
        <div className=" card bg-base-200 rounded-box w-full p-4">
          <h1 className="text-2xl mb-2 font-semibold">San Francisco</h1>
          <p className="mb-3 border-b-2 pb-2 border-gray-400 text-xl">
            865 Market Street San Francisco Centre
          </p>
          <p className="mb-1 text-lg">Opening Time: 9:00 AM</p>
          <p className="mb-2 text-lg">Closing Time: 12:30 PM</p>
        </div>
      </div>
    </div>
  )
}

export default OurOutlets
