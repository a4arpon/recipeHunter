import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'
import { Link } from 'react-router-dom'
const ChefCard = ({ chef }) => {
  const { _id, img, chefName, yearsOfExperience, numbersOfRecipes, likes } =
    chef
  return (
    <div className="card card-compact w-full bg-base-100 shadow-xl">
      <figure>
        <LazyLoadImage
          src={img}
          alt={'Photo Of Chef' + chefName}
          className="max-h-72 h-auto w-full"
          effect="blur"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title font-extrabold">{chefName}</h2>
        <ul className="font-semibold">
          <li>Years of experience : {yearsOfExperience || 0}</li>
          <li>Numbers of recipes : {numbersOfRecipes || 0}</li>
          <li>Likes : {likes || 0}</li>
        </ul>
        <div className="card-actions justify-end">
          <Link className="btn btn-primary font-bold" to={`/chef/${_id}`}>
            View Recipes
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ChefCard
