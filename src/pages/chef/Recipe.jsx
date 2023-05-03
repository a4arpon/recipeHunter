const Recipe = ({ recipe }) => {
  const { dishName } = recipe
  return (
    <div className="card card-compact w-full bg-base-100 shadow-xl">
      <figure>
        <img src="..." alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-2xl">{dishName}</h2>
        <hr />
        <div className="">
          <p className="text-xl mb-3 font-semibold">Ingredients</p>
          <table className="table-zebra w-full text-lg border border-slate-500 p-2">
            <thead className="border-b border-slate-500 my-2">
              <tr className="text-left">
                <th className="p-2">Name</th>
                <th className="p-2">Quantity</th>
              </tr>
            </thead>
            <tbody>
              {recipe?.ingredients?.map((item, index) => (
                <tr key={index}>
                  <td className="p-2">{item?.name || 0}</td>
                  <td className="p-2">{item?.quantity || 0}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-auto mb-4">
          <p className="text-xl my-3 font-semibold">Instructions</p>
          <ul className="text-lg">
            {recipe?.instructions?.map((item, index) => (
              <li key={index} className="mb-1"><span className="font-semibold">{index + 1}.</span> {item}</li>
            ))}
          </ul>
        </div>
        <div className="card-actions justify-end mt-auto">
          <button className="btn btn-primary font-bold">Mark As Favorite</button>
        </div>
      </div>
    </div>
  )
}

export default Recipe
