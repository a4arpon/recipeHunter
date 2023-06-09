import { useEffect, useState } from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'
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
              <p className="py-6">{chef?.bio || 'Great Food, Great Life'}</p>
              <ul className="font-semibold">
                <li>Years of experience : {chef?.yearsOfExperience || 0}</li>
                <li>Numbers of recipes : {chef?.numbersOfRecipes || 0}</li>
                <li>Likes : {chef?.likes || 0}</li>
              </ul>
            </div>
            <LazyLoadImage
              src={chef?.img || backupImg}
              className="w-auto lg:h-auto max-h-96 mb-4 p-2 rounded-3xl"
              effect="blur"
            />
          </div>
        </div>
        <div className="container mx-auto grid lg:grid-cols-2 gap-3 my-16 px-2 md:px-0">
          <h1 className="lg:col-span-2 text-3xl font-bold text-center mb-2 pb-3 border-b-2">
            {chef.chefName}&rsquo;s Top Class Recipes
          </h1>
          {chef?.recipes?.map((recipe) => (
            // Chef id is required for making unique id for favorites recipes and storing it in local storage.
            <Recipe key={recipe._id} recipe={recipe} chef={chefID} />
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
