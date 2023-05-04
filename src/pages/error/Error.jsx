import { Link } from 'react-router-dom'
import errorImg from '../../assets/img/error.png'
const Error = () => {
  return (
    <div className="container mx-auto my-10 flex flex-col justify-center items-center md:h-[calc(100vh-30vh)] px-5">
      <img src={errorImg} alt="Error 404. Page Not Found." />
      <h1 className="mb-3 text-5xl text-rose-600 font-bold">Error 404.</h1>
      <p className="mb-3 text-xl">
        Page Not Found. You&rsquo;re at the wrong directory. Click to back on{' '}
        <Link className="text-blue-600 font-bold" to="/">
          Home Page.
        </Link>
      </p>
    </div>
  )
}

export default Error
