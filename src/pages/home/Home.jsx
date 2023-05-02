import Hero from '../../components/Hero'
import Navbar from '../../components/shared/Navbar'

const Home = () => {
  return (
    <div>
      <div className="bg-accent bg-opacity-80 sticky z-10">
        <Navbar />
      </div>
      <Hero />
    </div>
  )
}

export default Home
