import { Navigate, Route, Routes } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import HomePage from './pages/HomePage'
import ProductsPage from './pages/ProductsPage'
import ContactPage from './pages/ContactPage'
import TechnologiesPage from './pages/TechnologiesPage'
import RoadmapPage from './pages/RoadmapPage'
import FounderPage from './pages/FounderPage'

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/urunler" element={<ProductsPage />} />
        <Route path="/teknolojiler" element={<TechnologiesPage />} />
        <Route path="/roadmap" element={<RoadmapPage />} />
        <Route path="/kurucu" element={<FounderPage />} />
        <Route path="/iletisim" element={<ContactPage />} />
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}

export default App
