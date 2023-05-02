import heroImage from '../assets/img/chefHero.png'
const Hero = () => {
  return (
    <div className="hero py-10 bg-info">
      <div className="hero-content flex-col-reverse lg:flex-row container w-full">
        <div className="lg:w-3/4">
          <h1 className="text-5xl font-bold">What are your favorite cuisines?</h1>
          <p className="py-6">
            Great Food, Great Life.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
        <img
          src={heroImage}
          className="w-auto lg:h-auto max-h-96  lg:w-1/4 mb-4 p-2"
        />
      </div>
    </div>
  )
}

export default Hero
