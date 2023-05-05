import { useEffect, useState } from 'react'
import Hero from '../../components/Hero'
import Loader from '../../components/shared/Loader'
import Affiliate from './Affiliate'
import ChefCard from './ChefCard'
import OurOutlets from './OurOutlets'

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
          <h1 className="md:col-span-2 lg:col-span-3 xl:col-span-4 text-3xl font-bold text-center mb-2 pb-3 border-b-2">
            Our Top Class Chefs
          </h1>
          {chefs.map((item) => (
            <ChefCard key={item._id} chef={item} />
          ))}
        </div>
          )
        : (
        <Loader />
          )}
      <div className="container mx-auto px-2">
        <Affiliate />
        <OurOutlets />
      </div>
    </div>
  )
}

export default Home
