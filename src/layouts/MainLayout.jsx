import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const brand = 'ALTIOK SOFTWARE'
const titles = {
  '/': `${brand} | Yazılım Çözümleri`,
  '/urunler': `AutoCare Servis Yönetim Platformu | ${brand}`,
  '/teknolojiler': `Teknoloji | ${brand}`,
  '/roadmap': `Yol Haritası | ${brand}`,
  '/kurucu': `Kurucu | ${brand}`,
  '/iletisim': `İletişim | ${brand}`,
  '/support': `Destek | ${brand}`,
  '/privacy': `Gizlilik Politikası | ${brand}`,
  '/terms': `Kullanım Şartları | ${brand}`,
  '/account-deletion': `Hesap Silme | ${brand}`,
  '/projects/kuzucular-premium-servis': `Kuzucular Premium Servis | ${brand}`,
}

function MainLayout() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
    document.title = titles[pathname] || `Sayfa bulunamadı | ${brand}`
  }, [pathname])

  return (
    <div className="min-h-screen overflow-x-clip bg-ink">
      <a href="#icerik" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-brand focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-ink">
        İçeriğe geç
      </a>
      <Navbar />
      <main id="icerik">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default MainLayout
