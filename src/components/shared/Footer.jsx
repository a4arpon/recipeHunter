const Footer = () => {
  return (
    <footer className="footer p-10 bg-base-200 text-base-content justify-around">
      <div>
        <span className="footer-title">Services</span>
        <a className="link link-hover">Affiliate</a>
        <a className="link link-hover">Our Outlets</a>
        <a className="link link-hover">Home Delivery</a>
      </div>
      <div>
        <span className="footer-title">Legal</span>
        <a className="link link-hover">Terms of use</a>
        <a className="link link-hover">Privacy policy</a>
        <a className="link link-hover">Cookie policy</a>
      </div>
      <div>
        <span className="footer-title">Newsletter</span>
        <div className="form-control w-80">
          <label className="label">
            <span className="label-text">
              Enter your email address, we will send you emails when new recipe
              or chef will be added to our library.
            </span>
          </label>
          <div className="relative mt-4">
            <input
              type="text"
              placeholder="youremail@provider.com"
              className="input input-bordered w-full pr-16"
            />
            <button className="btn btn-primary absolute top-0 right-0 rounded-l-none">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
