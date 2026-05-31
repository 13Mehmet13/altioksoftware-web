import { Suspense, lazy } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'

const HomePage = lazy(() => import('./pages/HomePage'))
const ProductsPage = lazy(() => import('./pages/ProductsPage'))
const TechnologiesPage = lazy(() => import('./pages/TechnologiesPage'))
const RoadmapPage = lazy(() => import('./pages/RoadmapPage'))
const FounderPage = lazy(() => import('./pages/FounderPage'))
const ContactPage = lazy(() => import('./pages/ContactPage'))
const PrivacyPage = lazy(() => import('./pages/PrivacyPage'))
const TermsPage = lazy(() => import('./pages/TermsPage'))
const SupportPage = lazy(() => import('./pages/SupportPage'))
const AccountDeletionPage = lazy(() => import('./pages/AccountDeletionPage'))
const KuzucularProjectPage = lazy(() => import('./pages/KuzucularProjectPage'))

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
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/terms" element={<TermsPage />} />
          <Route path="/support" element={<SupportPage />} />
          <Route path="/account-deletion" element={<AccountDeletionPage />} />
          <Route path="/projects/kuzucular-premium-servis" element={<KuzucularProjectPage />} />
        </Route>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Suspense>
  )
}

export default App
