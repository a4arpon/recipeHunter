import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
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
      .catch(toast.error('Failed To Load Data.'))
  }, [])
  return (
    <div>
      <Hero />
      {chefs ? chefs.map((item) => <ChefCard key={item._id} />) : <Loader />}
    </div>
  )
}

export default Home
