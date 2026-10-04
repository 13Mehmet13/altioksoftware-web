import { Link } from 'react-router-dom'
import PageHead from '../components/PageHead'

// Yeni madde eklemek için ilgili diziye bir nesne eklemek yeterli.
const live = [
  { name: 'AutoCare platformu', text: 'Oto servisler için müşteri, araç, iş emri ve kasa yönetimi.', to: '/urunler', cta: 'Ürünü incele' },
  { name: 'Kuzucular Premium Servis', text: 'AutoCare altyapısıyla geliştirilen servis işletmesi uygulaması. Mağaza yayını için gizlilik, destek ve hesap silme sayfaları hazır.', to: '/projects/kuzucular-premium-servis', cta: 'Proje sayfası' },
  { name: 'Tatvan Evi Derneği platformu', text: 'Dernek için kurumsal site ve kod bilmeden içerik yönetilen admin paneli. Canlıda çalışıyor.', href: 'https://tatvanevi.com', cta: 'tatvanevi.com' },
  { name: 'Altıok Software web sitesi', text: 'Ürün, teknoloji, destek ve yasal sayfaları.', to: '/', cta: 'Ana sayfa' },
]

const planned = [
  { name: 'SanayiData', text: 'Servis ve parça verisi için planlanan ürün.' },
  { name: 'Parça Ağı', text: 'Servisleri parçacılarla buluşturması planlanan ürün.' },
  { name: 'AI Servis Asistanı', text: 'Servis kayıtlarından öneri üretmesi planlanan ürün.' },
]

function RoadmapPage() {
  return (
    <>
      <PageHead
        eyebrow="Roadmap"
        title="Ürün yol haritası"
        text="Yayındaki ürünlerimizi ve planladığımız yeni çalışmaları buradan takip edebilirsiniz."
      >
        <dl className="mt-10 flex flex-wrap gap-x-10 gap-y-4 font-mono text-xs">
          <div className="flex items-baseline gap-3"><dt className="text-mute">Yayında</dt><dd className="font-display text-2xl font-semibold tabular-nums text-emerald-300">{live.length}</dd></div>
          <div className="flex items-baseline gap-3"><dt className="text-mute">Planlanan</dt><dd className="font-display text-2xl font-semibold tabular-nums text-brand">{planned.length}</dd></div>
        </dl>
      </PageHead>

      <section className="py-16 sm:py-24">
        <div className="container-main grid gap-10 lg:grid-cols-2">
          <div>
            <p className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-emerald-300">
              <i className="h-2 w-2 rounded-full bg-emerald-400" />Yayında
            </p>
            <ul className="mt-6 flex flex-col gap-4">
              {live.map((i) => (
                <li key={i.name} className="panel flex flex-col items-start gap-4 p-6">
                  <div>
                    <h2 className="font-display text-xl font-semibold">{i.name}</h2>
                    <p className="mt-2 text-sm leading-6 text-mute">{i.text}</p>
                  </div>
                  {i.href ? (
                    <a href={i.href} target="_blank" rel="noreferrer" className="font-mono text-xs text-brand transition hover:text-accentSoft">{i.cta} →</a>
                  ) : (
                    <Link to={i.to} className="font-mono text-xs text-brand transition hover:text-accentSoft">{i.cta} →</Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-brand">
              <i className="h-2 w-2 rounded-full bg-brand" />Planlanan
            </p>
            <ul className="mt-6 flex flex-col gap-4">
              {planned.map((i) => (
                <li key={i.name} className="panel border-dashed p-6">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <h2 className="font-display text-xl font-semibold">{i.name}</h2>
                    <span className="rounded-full border border-brand/40 bg-brand/10 px-3 py-1 font-mono text-[11px] text-brand">Planlandı</span>
                  </div>
                  <p className="mt-2 text-sm leading-6 text-mute">{i.text}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="container-main mt-14">
          <div className="panel flex flex-col items-start justify-between gap-6 p-7 sm:flex-row sm:items-center sm:p-9">
            <div>
              <h2 className="font-display text-xl font-semibold">Eksik bir özellik mi var?</h2>
              <p className="mt-2 max-w-lg text-sm text-mute">İşletmenizde en çok zaman alan işi yazın. Yol haritasını gerçek ihtiyaçlara göre şekillendiriyoruz.</p>
            </div>
            <Link to="/iletisim" className="btn-primary shrink-0">Özellik öner</Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default RoadmapPage
