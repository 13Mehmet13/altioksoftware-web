import { Link } from 'react-router-dom'
import Logo from './Logo'

const cols = [
  {
    title: 'Hizmetler',
    links: [
      { label: 'AutoCare', to: '/urunler' },
      { label: 'Teknoloji', to: '/teknolojiler' },
      { label: 'Roadmap', to: '/roadmap' },
    ],
  },
  {
    title: 'Şirket',
    links: [
      { label: 'Kurucu', to: '/kurucu' },
      { label: 'İletişim', to: '/iletisim' },
      { label: 'Destek', to: '/support' },
      { label: 'Kuzucular Premium Servis', to: '/projects/kuzucular-premium-servis' },
    ],
  },
  {
    title: 'Yasal',
    links: [
      { label: 'Gizlilik Politikası', to: '/privacy' },
      { label: 'Kullanım Şartları', to: '/terms' },
      { label: 'Hesap Silme', to: '/account-deletion' },
    ],
  },
]

function Footer() {
  return (
    <footer className="border-t border-edge bg-surface">
      <div className="container-main grid gap-10 py-14 md:grid-cols-[1.4fr_repeat(3,1fr)]">
        <div>
          <div className="flex items-center gap-3">
            <Logo className="h-8 w-auto" />
            <span className="font-display text-base font-semibold tracking-[0.14em]">ALTIOK<span className="ml-1.5 text-brand">SOFTWARE</span></span>
          </div>
          <p className="mt-4 max-w-xs text-sm leading-6 text-mute">İşletmeler için mobil, web ve backend yazılım çözümleri.</p>
          <div className="mt-5 flex gap-4 font-mono text-xs">
            <a href="https://github.com/13Mehmet13" target="_blank" rel="noreferrer" className="text-mute transition hover:text-fg">GitHub</a>
            <a href="https://instagram.com/altioksoftware" target="_blank" rel="noreferrer" className="text-mute transition hover:text-fg">Instagram</a>
          </div>
        </div>
        {cols.map((c) => (
          <div key={c.title}>
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-brand">{c.title}</p>
            <ul className="mt-4 flex flex-col gap-2.5 text-sm">
              {c.links.map((l) => (
                <li key={l.to}><Link to={l.to} className="text-mute transition hover:text-fg">{l.label}</Link></li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-edge">
        <div className="container-main flex flex-wrap items-center justify-between gap-2 py-5 font-mono text-[11px] text-mute">
          <p>© {new Date().getFullYear()} Altıok Software</p>
          <div className="flex flex-wrap gap-x-6 gap-y-1"><a href="tel:+905445259309" className="transition hover:text-fg">0544 525 93 09</a><a href="mailto:mehmetaltiok.ma@gmail.com" className="transition hover:text-fg">mehmetaltiok.ma@gmail.com</a></div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
