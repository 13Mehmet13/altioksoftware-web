import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="mt-16 border-t border-slate-200 bg-gradient-to-b from-white to-sky-50 py-12">
      <div className="container-main grid gap-8 md:grid-cols-3">
        <div className="flex flex-col items-center text-center md:items-start md:text-left">
          <img src="/logo-full.png" alt="Altıok Software" className="h-24 w-auto object-contain" />
          <p className="-mt-3 text-sm font-semibold text-slate-900">ALTIOK SOFTWARE</p>
          <p className="text-sm text-slate-700">Automotive & Digital Solutions</p>
        </div>

        <div>
          <p className="text-sm font-semibold text-slate-900">Menü</p>
          <ul className="mt-3 space-y-2 text-sm text-slate-700">
            <li>
              <Link to="/" className="transition hover:text-sky-700">
                Ana Sayfa
              </Link>
            </li>
            <li>
              <Link to="/urunler" className="transition hover:text-sky-700">
                AutoCare
              </Link>
            </li>
            <li>
              <Link to="/teknolojiler" className="transition hover:text-sky-700">
                Özellikler
              </Link>
            </li>
            <li>
              <Link to="/iletisim" className="transition hover:text-sky-700">
                İletişim
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold text-slate-900">Sosyal Medya</p>
          <div className="mt-3 flex gap-3 text-sm text-slate-700">
            <a
              href="https://github.com/13Mehmet13"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="inline-flex items-center gap-2 rounded-lg border border-slate-300 px-3 py-2 transition hover:border-sky-300 hover:bg-sky-50"
            >
              <img
                src="https://cdn.simpleicons.org/github/111827"
                alt="GitHub"
                className="h-4 w-4"
                loading="lazy"
              />
              <span>GitHub</span>
            </a>
            <a
              href="https://instagram.com/altioksoftware"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="inline-flex items-center gap-2 rounded-lg border border-slate-300 px-3 py-2 transition hover:border-sky-300 hover:bg-sky-50"
            >
              <img
                src="https://cdn.simpleicons.org/instagram/E4405F"
                alt="Instagram"
                className="h-4 w-4"
                loading="lazy"
              />
              <span>Instagram</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
