import { Link } from 'react-router-dom'

const stack = ['Flutter', 'FastAPI', 'PostgreSQL', 'Python', 'Docker', 'REST API', 'AI']

const services = [
  { tag: 'MOBİL', title: 'Mobil uygulama', text: 'Flutter ile iOS ve Android için tek kod tabanından hızlı, akıcı uygulamalar.' },
  { tag: 'WEB', title: 'Web platformları', text: 'Kurumsal siteler ve kod bilmeden yönetilen admin panelleri.' },
  { tag: 'BACKEND', title: 'API ve veri', text: 'FastAPI ve PostgreSQL ile ölçeklenebilir, güvenli servis altyapısı.' },
  { tag: 'AI', title: 'Yapay zeka', text: 'Servis ve operasyon verisinden karar destek ve asistan özellikleri.' },
]

const autocare = ['Müşteri ve araç geçmişi', 'İş emri ve servis takibi', 'Cari ve kasa', 'PDF servis formu', 'SMS ve e-posta bildirimi', 'Firma logosu ve tema']

const steps = [
  { title: 'Analiz', text: 'İşletmenin akışını dinler, hangi işin zaman aldığını bulur, kapsamı yazıya döküyoruz.' },
  { title: 'Tasarım', text: 'Ekranlar ve veri modeli onayınıza sunulur. Kod yazılmadan önce ne alacağınızı görürsünüz.' },
  { title: 'Geliştirme', text: 'Kısa aralıklarla çalışan sürümler teslim edilir, her adımda geri bildirim alınır.' },
  { title: 'Yayın ve destek', text: 'Canlıya alma, yedekleme ve izleme dahil. Yayından sonra da yanınızdayız.' },
]

const faqs = [
  { q: 'AutoCare hangi işletmeler için uygundur?', a: 'Oto servisler, mekanik ustalar, özel servisler ve küçük/orta ölçekli otomotiv işletmeleri için uygundur.' },
  { q: 'Kurulum süreci ne kadar sürer?', a: 'İşletme ihtiyaçlarına göre değişmekle birlikte temel kurulum ve ilk yapılandırma kısa sürede tamamlanabilir.' },
  { q: 'Veriler güvenli şekilde saklanıyor mu?', a: 'Evet. Erişim, yedekleme ve altyapı güvenliği prensipleriyle verileriniz kontrollü şekilde korunur.' },
  { q: 'Demo talebinden sonra nasıl ilerleniyor?', a: 'Talebiniz sonrası sizinle iletişime geçilir, süreç analizi yapılır ve uygun kullanım planı paylaşılır.' },
]

const orders = [
  { plate: '06 ABC 123', job: 'Periyodik bakım', state: 'Devam ediyor', tone: 'text-brand border-brand/40 bg-brand/10' },
  { plate: '34 XYZ 482', job: 'Fren balatası', state: 'Parça bekliyor', tone: 'text-amber-300 border-amber-400/40 bg-amber-400/10' },
  { plate: '35 KLM 907', job: 'Yağ ve filtre', state: 'Teslime hazır', tone: 'text-emerald-300 border-emerald-400/40 bg-emerald-400/10' },
  { plate: '16 DEF 215', job: 'Arıza tespiti', state: 'Kabul edildi', tone: 'text-mute border-edge bg-raised' },
]

function AutoCareMock() {
  return (
    <div className="panel overflow-hidden shadow-[0_30px_80px_-30px_rgba(46,163,255,0.3)]" aria-label="AutoCare örnek ekranı">
      <div className="flex items-center gap-3 border-b border-edge bg-raised px-4 py-2.5">
        <div className="flex gap-1.5" aria-hidden="true">
          <i className="h-2.5 w-2.5 rounded-full bg-edge" />
          <i className="h-2.5 w-2.5 rounded-full bg-edge" />
          <i className="h-2.5 w-2.5 rounded-full bg-edge" />
        </div>
        <p className="font-mono text-xs text-mute">AutoCare · İş emirleri</p>
        <p className="ml-auto font-mono text-[11px] text-mute">Örnek veri</p>
      </div>
      <div className="grid grid-cols-3 gap-2 p-4">
        {[['Açık', '12'], ['Bugün teslim', '5'], ['Tahsilat', '₺18.450']].map(([k, v]) => (
          <div key={k} className="rounded-lg border border-edge bg-ink/60 p-3">
            <p className="font-mono text-[10px] uppercase tracking-widest text-mute">{k}</p>
            <p className="mt-1 font-display text-xl font-semibold tabular-nums">{v}</p>
          </div>
        ))}
      </div>
      <ul className="divide-y divide-edge border-t border-edge">
        {orders.map((o) => (
          <li key={o.plate} className="flex items-center justify-between gap-3 px-4 py-3">
            <div className="min-w-0">
              <p className="font-mono text-sm tabular-nums">{o.plate}</p>
              <p className="truncate text-xs text-mute">{o.job}</p>
            </div>
            <span className={`shrink-0 rounded-full border px-2.5 py-1 text-[11px] font-medium ${o.tone}`}>{o.state}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-edge">
        <div className="grid-bg pointer-events-none absolute inset-0" />
        <div className="pointer-events-none absolute -right-40 -top-40 h-[480px] w-[480px] rounded-full bg-brand/10 blur-3xl" />
        <div className="container-main relative grid items-center gap-12 py-16 sm:py-24 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <p className="eyebrow flex items-center gap-2">
              <i className="live-dot h-1.5 w-1.5 rounded-full bg-brand" />
              Yazılım · Mobil · Web
            </p>
            <h1 className="h1 mt-5">İşletmeniz için modern, düzenli yazılım.</h1>
            <p className="lead mt-6">
              Altıok Software, ihtiyacınıza özel mobil, web ve backend çözümleri geliştirir.
              Ürünlerimizden AutoCare, oto servislerin müşteri, araç, iş emri ve kasa yönetimini tek yerde toplar.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link to="/iletisim" className="btn-primary">Demo talep et</Link>
              <Link to="/urunler" className="btn-secondary">AutoCare’i incele</Link>
            </div>
          </div>
          <AutoCareMock />
        </div>
      </section>

      <section className="border-b border-edge bg-surface">
        <div className="container-main flex flex-wrap items-center gap-x-8 gap-y-3 py-6 font-mono text-xs text-mute">
          <span className="text-brand">STACK</span>
          {stack.map((s) => (<span key={s} className="text-fg">{s}</span>))}
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="container-main grid items-start gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="eyebrow">Ürün</p>
            <h2 className="h2 mt-4">AutoCare ile servisin tüm işi tek panelde.</h2>
            <p className="lead mt-4">Defter ve Excel karmaşasını azaltır, servis geçmişini düzenli tutar, işletmeye kurumsal bir görünüm kazandırır.</p>
            <Link to="/urunler" className="btn-secondary mt-8">Detayları gör</Link>
          </div>
          <ul className="grid gap-px overflow-hidden rounded-xl border border-edge bg-edge sm:grid-cols-2">
            {autocare.map((f) => (
              <li key={f} className="flex items-center gap-3 bg-ink p-5 text-sm font-medium"><i className="h-px w-4 bg-brand" />{f}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-y border-edge bg-surface py-20 sm:py-28">
        <div className="container-main">
          <p className="eyebrow">Neler yapıyoruz</p>
          <h2 className="h2 mt-4 max-w-2xl">Uçtan uca, ihtiyaca göre.</h2>
          <div className="mt-12 grid gap-px overflow-hidden rounded-xl border border-edge bg-edge sm:grid-cols-2 lg:grid-cols-4">
            {services.map((s) => (
              <div key={s.tag} className="bg-ink p-6">
                <p className="font-mono text-[11px] tracking-[0.2em] text-brand">{s.tag}</p>
                <h3 className="mt-5 font-display text-xl font-semibold">{s.title}</h3>
                <p className="mt-3 text-sm leading-6 text-mute">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="container-main">
          <p className="eyebrow">Süreç</p>
          <h2 className="h2 mt-4 max-w-2xl">Dört adımda, şeffaf ilerleriz.</h2>
          <ol className="mt-12 grid gap-px overflow-hidden rounded-xl border border-edge bg-edge md:grid-cols-4">
            {steps.map((s, i) => (
              <li key={s.title} className="bg-ink p-6">
                <p className="font-mono text-xs text-brand">ADIM {i + 1}</p>
                <h3 className="mt-4 font-display text-lg font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm leading-6 text-mute">{s.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="border-t border-edge bg-surface py-20 sm:py-28">
        <div className="container-main grid items-start gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="eyebrow">Sık sorulan sorular</p>
            <h2 className="h2 mt-4">AutoCare hakkında</h2>
            <p className="lead mt-4">Başka sorunuz varsa iletişim formundan yazabilirsiniz.</p>
          </div>
          <div className="divide-y divide-edge border-y border-edge">
            {faqs.map((f) => (
              <details key={f.q} className="group py-5">
                <summary className="flex cursor-pointer list-none items-start justify-between gap-4 font-display text-base font-semibold [&::-webkit-details-marker]:hidden">
                  {f.q}
                  <span className="mt-0.5 font-mono text-brand transition group-open:rotate-45" aria-hidden="true">+</span>
                </summary>
                <p className="mt-3 max-w-xl text-sm leading-6 text-mute">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="container-main">
          <div className="panel flex flex-col items-start justify-between gap-8 p-8 sm:p-12 lg:flex-row lg:items-center">
            <div>
              <h2 className="h2 max-w-xl">Servisinizi dijitale taşımaya hazır mısınız?</h2>
              <p className="lead mt-3">Kısa bir görüşmeyle ihtiyacınızı dinler, size uygun planı paylaşırız.</p>
            </div>
            <Link to="/iletisim" className="btn-primary shrink-0">Demo talep et</Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default HomePage
