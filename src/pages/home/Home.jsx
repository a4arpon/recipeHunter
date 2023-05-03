import { useEffect, useState } from 'react'
import Hero from '../../components/Hero'
import Loader from '../../components/shared/Loader'
import ChefCard from './ChefCard'

const Home = () => {
  const [chefs, setChefs] = useState(null)
  useEffect(() => {
    fetch(
      'https://b7a10-chef-recipe-hunter-server-side-a4arpon-a4arpon.vercel.app/'
    )
      .then((res) => res.json())
      .then((res) => setChefs(res))
  }, [])
  return (
    <div>
      <Hero />
      {chefs
        ? (
        <div className="container mx-auto grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 my-16 gap-5 px-2">
          {chefs.map((item) => (
            <ChefCard key={item._id} chef={item} />
          ))}
        </div>
          )
        : (
        <Loader />
          )}
    </div>
  )
}

export default Home
