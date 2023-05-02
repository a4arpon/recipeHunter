import { Link } from 'react-router-dom'

const ChefCard = ({ chef }) => {
  const { _id, chefName, yearsOfExperience, numbersOfRecipes } = chef
  return (
    <div className="card card-compact w-full bg-base-100 shadow-xl">
      <figure>
        <img
          src="https://static.nationalgeographic.co.uk/files/styles/image_3200/public/pioneer_sean-sherman_isa8573_hr.webp?w=400&h=500"
          alt="Shoes"
          className="max-h-72 h-auto w-full"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title font-extrabold">{chefName}</h2>
        <ul className="font-semibold">
          <li>Years of experience : {yearsOfExperience}</li>
          <li>Numbers of recipes : {numbersOfRecipes}</li>
        </ul>
        <div className="card-actions justify-end">
          <Link className="btn btn-primary" to={`/chef/${_id}`}>
            View Recipes Button
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ChefCard
