const Blog = () => {
  const qna = [
    {
      _id: 1,
      q: 'How to validate React props using PropTypes tell under 50 words ChatGPT',
      a: 'To validate React props using PropTypes, import the PropTypes library, define a propTypes object, and set the prop types for each prop in the object. Use the propTypes object to validate that the props passed to a component match their expected types and values.'
    },
    {
      _id: 2,
      q: 'How to validate React props using PropTypes tell under 50 words ChatGPT',
      a: 'To validate React props using PropTypes, import the PropTypes library, define a propTypes object, and set the prop types for each prop in the object. Use the propTypes object to validate that the props passed to a component match their expected types and values.'
    }
  ]
  return (
    <div className="container mx-auto px-2 my-20">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
        {qna.map((qna) => (
          <div className="card w-full bg-base-100 shadow-xl" key={qna._id}>
            <div className="card-body">
              <h2 className="card-title mb-2 border-b-2 border-gray-400 pb-2">
                {qna.q}
              </h2>
              <p>{qna.a}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Blog
