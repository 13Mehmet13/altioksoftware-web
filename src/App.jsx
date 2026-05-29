import { Suspense, lazy } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'

const HomePage = lazy(() => import('./pages/HomePage'))
const ProductsPage = lazy(() => import('./pages/ProductsPage'))
const TechnologiesPage = lazy(() => import('./pages/TechnologiesPage'))
const RoadmapPage = lazy(() => import('./pages/RoadmapPage'))
const FounderPage = lazy(() => import('./pages/FounderPage'))
const ContactPage = lazy(() => import('./pages/ContactPage'))

function App() {
  return (
    <Suspense fallback={<div className="min-h-[40vh]" />}>
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
    </Suspense>
  )
}

export default App
