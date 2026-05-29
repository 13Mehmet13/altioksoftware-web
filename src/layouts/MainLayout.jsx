import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function MainLayout() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-white">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_0%,rgba(46,163,255,0.15),transparent_35%),radial-gradient(circle_at_80%_30%,rgba(87,213,255,0.1),transparent_32%)]" />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-grid bg-[size:24px_24px] opacity-20" />
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default MainLayout
