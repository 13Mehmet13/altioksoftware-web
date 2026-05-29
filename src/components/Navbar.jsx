import { useState } from 'react'
import { NavLink } from 'react-router-dom'

const links = [
  { label: 'Ana Sayfa', to: '/' },
  { label: 'AutoCare', to: '/urunler' },
  { label: 'Teknolojiler', to: '/teknolojiler' },
  { label: 'Roadmap', to: '/roadmap' },
  { label: 'Kurucu', to: '/kurucu' },
  { label: 'İletişim', to: '/iletisim' },
]

function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/85 backdrop-blur-xl">
      <div className="container-main flex h-24 items-center justify-between gap-4">
        <NavLink to="/" className="flex items-center" onClick={() => setOpen(false)}>
          <img src="/logo-full.png" alt="Altıok Software Logo" className="h-20 w-auto object-contain" />
        </NavLink>

        <nav className="hidden items-center gap-5 text-sm text-slate-700 lg:flex">
          {links.map((link) => (
            <NavLink
              key={link.label}
              to={link.to}
              className={({ isActive }) =>
                `transition hover:text-sky-500 ${isActive ? 'text-sky-600' : 'text-slate-700'}`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <NavLink to="/iletisim" className="btn-primary hidden whitespace-nowrap text-xs sm:text-sm lg:inline-flex">
            Demo Talep Et
          </NavLink>
          <button
            type="button"
            className="inline-flex rounded-lg border border-slate-300 p-2 lg:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label="Menüyü Aç"
          >
            <span className="text-slate-700">☰</span>
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-slate-200 bg-white lg:hidden">
          <div className="container-main flex flex-col py-3">
            {links.map((link) => (
              <NavLink
                key={link.label}
                to={link.to}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2 text-sm text-slate-700 hover:bg-sky-50"
              >
                {link.label}
              </NavLink>
            ))}
            <NavLink
              to="/iletisim"
              onClick={() => setOpen(false)}
              className="btn-primary mt-2 w-full text-center text-sm"
            >
              Demo Talep Et
            </NavLink>
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar
