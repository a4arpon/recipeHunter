import heroImage from '../assets/img/chefHero.webp'
const Hero = () => {
  return (
    <div className="hero py-10 bg-info">
      <div className="hero-content flex-col-reverse md:flex-row lg:container w-full items-start lg:items-center md:justify-between">
        <div className="lg:w-3/4">
          <h1 className="text-5xl font-bold">BuckDonald&rsquo;s Web</h1>
          <p className="py-6 text-2xl">
            Wikipedia for Crispy, Cheesy And Juicy Cooking Recipes
          </p>
          <button className="btn btn-primary font-bold">Get Started</button>
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
