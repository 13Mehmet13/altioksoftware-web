import { NavLink } from 'react-router-dom'

const features = [
  'Araç yönetimi',
  'Müşteri yönetimi',
  'Servis kayıtları',
  'Servis geçmişi',
  'PDF servis raporları',
  'Bildirim sistemi',
  'Cari ve kasa takibi',
  'Firma özelleştirme',
]

function KuzucularProjectPage() {
  return (
    <div className="py-14 sm:py-20">
      <section className="container-main">
        <div className="deep-panel rounded-3xl p-8 sm:p-12">
          <p className="text-xs uppercase tracking-[0.16em] text-sky-800">Proje Sayfası</p>
          <h1 className="mt-3 text-3xl font-semibold text-slate-900 sm:text-5xl">Kuzucular Premium Servis</h1>
          <p className="mt-5 max-w-4xl text-sm leading-7 text-slate-700 sm:text-base">
            Kuzucular Premium Servis, servis işletmelerinin günlük operasyonlarını dijitalleştiren modern yönetim
            uygulamasıdır. Bu sayfa, App Store ve Google Play Store için resmi tanıtım ve destek referansı olarak
            kullanılmak üzere hazırlanmıştır.
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            <NavLink to="/support" className="btn-primary">Destek Al</NavLink>
            <NavLink to="/privacy" className="btn-secondary">Gizlilik Politikası</NavLink>
          </div>
        </div>
      </section>

      <section className="container-main mt-8">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <article key={feature} className="glass-panel rounded-2xl p-5">
              <p className="text-sm font-semibold text-slate-800">{feature}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}

export default KuzucularProjectPage
