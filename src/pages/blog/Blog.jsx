const Blog = () => {
  const qna = [
    {
      _id: 1,
      q: 'Tell us the differences between uncontrolled and controlled components.',
      a: 'In React, components can manage its own state or have their state managed by a parent component. Uncontrolled components are easier to use but offer less control, while controlled components offer more control. Controlled components are often used for forms or interactive components that require complex state management.'
    },
    {
      _id: 2,
      q: 'How to validate React props using PropTypes?',
      a: 'To validate React props using PropTypes, import the PropTypes library, define a propTypes object, and set the prop types for each prop in the object. Use the propTypes object to check if the props passed to a component match their expected types and values.'
    },
    {
      _id: 3,
      q: 'Tell us the difference between nodejs and express js.',
      a: 'Node.js is a runtime environment for executing JavaScript code outside of a web browser. Express.js is a web application framework built on top of Node.js. In other words, Node.js is the foundation, and Express.js is a tool that makes it easier to build web applications with Node.js.'
    },
    {
      _id: 4,
      q: 'What is a custom hook, and why will you create a custom hook?',
      a: 'A custom hook is a reusable function that can be used in React components. It is a way to share code between components without having to write it all over again.'
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
