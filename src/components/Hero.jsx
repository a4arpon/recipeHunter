const Hero = () => {
  return (
    <div className="hero py-10 bg-info">
      <div className="hero-content flex-col-reverse lg:flex-row container w-full">
        <div className="lg:w-3/4">
          <h1 className="text-5xl font-bold">Box Office News!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
        <img
          src="https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg"
          className="w-auto lg:h-auto max-h-80  lg:w-1/4 rounded-lg shadow-2xl"
        />
      </div>
    </div>
  )
}

export default Hero
