import { Outlet } from 'react-router-dom'
import Footer from '../components/shared/Footer'
import Navbar from '../components/shared/Navbar'

const MainLayout = () => {
  return (
    <div>
      <div className="bg-accent">
        <Navbar />
      </div>
      <Outlet />
      <Footer />
    </div>
  )
}

export default MainLayout
