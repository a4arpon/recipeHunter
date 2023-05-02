import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Loader from '../../components/shared/Loader'
import Recipe from './Recipe'
const Chef = () => {
  const { chefID } = useParams()
  const [chef, setChef] = useState(null)
  const backupImg =
    'https://hips.hearstapps.com/hmg-prod/images/johnnydepp.jpg?resize=512:*'
  useEffect(() => {
    fetch(
      'https://b7a10-chef-recipe-hunter-server-side-a4arpon-a4arpon.vercel.app/chef/' +
        chefID
    )
      .then((res) => res.json())
      .then((res) => setChef(res))
  }, [chefID])
  if (chef) {
    return (
      <div>
        <div className="hero py-10 bg-info">
          <div className="hero-content flex-col-reverse md:flex-row lg:container w-full items-start lg:items-center md:justify-between">
            <div className="lg:w-3/4">
              <h1 className="text-5xl font-bold">{chef.chefName}</h1>
              <p className="py-6">
                {chef?.bio || 'Great Food, Great Life'}
              </p>
              <ul className="font-semibold">
                <li>Years of experience : {chef?.yearsOfExperience || 0}</li>
                <li>Numbers of recipes : {chef?.numbersOfRecipes || 0}</li>
                <li>Likes : {chef?.likes || 0}</li>
              </ul>
            </div>
            <img
              src={chef?.img || backupImg}
              className="w-auto lg:h-auto max-h-96 lg:w-1/4 mb-4 p-2 rounded-3xl"
            />
          </div>
        </div>
        <div className="container mx-auto grid lg:grid-cols-2 gap-3 my-16">
          {chef?.recipes?.map((recipe) => (
            <Recipe key={recipe._id} recipe={recipe} />
          ))}
        </div>
      </div>
    )
  } else {
    return (
      <div className="h-[calc(100vh-20vh)] justify-center flex items-center">
        <Loader />
      </div>
    )
  }
}

export default Chef
