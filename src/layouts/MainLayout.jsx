import { Outlet } from 'react-router-dom'
import Footer from '../components/shared/Footer'
import Navbar from '../components/shared/Navbar'

const MainLayout = () => {
  return (
    <div>
      <div className="bg-accent bg-opacity-80 sticky z-10">
        <Navbar />
      </div>
      <Outlet />
      <Footer />
    </div>
  )
}

export default MainLayout
