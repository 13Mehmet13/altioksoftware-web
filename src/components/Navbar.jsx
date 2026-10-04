import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import Logo from './Logo'

const links = [
  { label: 'AutoCare', to: '/urunler' },
  { label: 'Teknoloji', to: '/teknolojiler' },
  { label: 'Roadmap', to: '/roadmap' },
  { label: 'Kurucu', to: '/kurucu' },
  { label: 'Destek', to: '/support' },
]

function Navbar() {
  const [open, setOpen] = useState(false)
  const linkClass = ({ isActive }) => `text-sm transition hover:text-fg ${isActive ? 'text-fg' : 'text-mute'}`

  return (
    <header className="sticky top-0 z-50 border-b border-edge bg-ink/80 backdrop-blur-xl">
      <div className="container-main flex h-16 items-center justify-between gap-4">
        <Link to="/" className="flex min-w-0 items-center gap-2.5 sm:gap-3" onClick={() => setOpen(false)} aria-label="Altıok Software ana sayfa">
          <Logo className="h-8 w-auto" />
          <span className="font-display text-sm font-semibold tracking-[0.08em] text-fg sm:text-base sm:tracking-[0.14em]">
            ALTIOK<span className="ml-1.5 font-medium text-brand">SOFTWARE</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex" aria-label="Ana menü">
          {links.map((l) => (
            <NavLink key={l.to} to={l.to} className={linkClass}>{l.label}</NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link to="/iletisim" className="btn-primary hidden !py-2 lg:inline-flex">İletişim</Link>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-edge text-fg lg:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label="Menüyü aç veya kapat"
            aria-expanded={open}
          >
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
              {open ? <path d="M3 3l12 12M15 3L3 15" /> : <path d="M2 5h14M2 9h14M2 13h14" />}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-edge bg-ink lg:hidden">
          <div className="container-main flex flex-col gap-1 py-3">
            {links.map((l) => (
              <NavLink key={l.to} to={l.to} onClick={() => setOpen(false)} className={({ isActive }) => `rounded-md px-3 py-3 text-sm ${isActive ? 'bg-raised text-fg' : 'text-mute'}`}>
                {l.label}
              </NavLink>
            ))}
            <Link to="/iletisim" onClick={() => setOpen(false)} className="btn-primary mt-2">İletişim</Link>
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar
