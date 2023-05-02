import { useLoaderData } from 'react-router-dom'
import Hero from '../../components/Hero'
import Footer from '../../components/shared/Footer'
import Navbar from '../../components/shared/Navbar'

const Home = () => {
  const chefs = useLoaderData()
  console.log(chefs)
  return (
    <div>
      <div className="bg-accent bg-opacity-80 sticky z-10">
        <Navbar />
      </div>
      <Hero />
      <Footer />
    </div>
  )
}

export default Home
