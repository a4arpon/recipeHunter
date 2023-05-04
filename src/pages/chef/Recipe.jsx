import { useState } from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'
import { toast } from 'react-toastify'
import { recipeAdder } from '../../utils/Utils'
const Recipe = ({ recipe, chef }) => {
  const { dishName, img, _id } = recipe
  // This state handles add to favorite button active or disable
  const [isDisabled, setIsDisabled] = useState(false)
  // This function handles favorite recipes event. Stores it on local storage and if the data is already saved it shows an error toast.
  const handleFavorite = (id) => {
    if (recipeAdder(id)) {
      setIsDisabled(true)
      toast.success('Recipe added to Favorites List.')
    } else {
      setIsDisabled(true)
      toast.error('Recipe already added in Favorite List.')
    }
  }
  return (
    <div className="card card-compact w-full bg-base-100 shadow-xl">
      <figure>
        <LazyLoadImage
          src={img}
          alt={dishName}
          className="h-auto w-full max-h-96"
          effect="blur"
          placeholderSrc={img}
          height="100%"
          width="100%"
        />
      </figure>
      <div className="card-body mt-4">
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
              <li key={index} className="mb-1">
                <span className="font-semibold">{index + 1}.</span> {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="card-actions justify-end mt-auto">
          <button
            className={
              // eslint-disable-next-line quotes
              `btn btn-primary font-bold  ${isDisabled && 'btn-disabled'}`
            }
            onClick={() => handleFavorite(_id + chef)}
          >
            Mark As Favorite
          </button>
        </div>
      </div>
    </div>
  )
}

export default Recipe
