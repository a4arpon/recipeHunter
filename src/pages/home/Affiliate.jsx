import { useEffect, useState } from 'react'

const Affiliate = () => {
  const [products, setProducts] = useState([])
  useEffect(() => {
    fetch('/Products.json')
      .then((res) => res.json())
      .then((res) => setProducts(res))
  }, [])

  return (
    <div className="my-20">
      <h1 className="border-b-2 pb-2 mb-4 text-2xl font-bold">
        Shop Now With Us.
      </h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
        {products.map((product) => (
          <div
            className="card card-compact w-full bg-base-100 shadow-xl"
            key={product.id}
          >
            <figure>
              <img
                src={product.img}
                alt={product.name}
                className="max-h-72 h-auto w-full"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{product.name.substring(0, 30)}...</h2>
              <p className="my-1 font-semibold">Price: {product.price}</p>
              <div className="card-actions justify-end mt-auto">
                <a
                  className="btn btn-error font-bold text-white"
                  href={product.link}
                  target="_blank"
                  rel="noreferrer"
                >
                  Buy Now
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Affiliate
