import { Link } from 'react-router-dom'

const roles = ['Bilgisayar Mühendisi', 'Yazılım Geliştirici', 'Chip Tuner']

const areas = [
  {
    tag: 'YAZILIM',
    title: 'Mobil, backend ve yapay zeka',
    text: 'Bilgisayar mühendisi olarak Flutter, FastAPI ve PostgreSQL ile işletmeler için uygulamalar geliştiriyorum. Tasarımdan yayına kadar süreci kendim yürütürüm.',
  },
  {
    tag: 'CHIP TUNING',
    title: 'ECU yazılımı optimizasyonu',
    text: 'Araçlar için ECU yazılımı üzerine çalışan bir tuner’ım. Motoru ve yazılımı birlikte okumak, işimi yazılım tarafında da besliyor.',
  },
  {
    tag: 'OTOMOTİV',
    title: 'Sektörü içeriden bilmek',
    text: 'Servis ve araç dünyasını yakından tanıdığım için geliştirdiğim yazılımlar sahadaki gerçek ihtiyaçtan çıkar.',
  },
]

const principles = [
  { title: 'Ölç', text: 'Tahmine değil, veriye bakarım.' },
  { title: 'Kayda al', text: 'Yaptığım her kritik işin izi ve geri dönüşü olur.' },
  { title: 'Doğrula', text: 'Sonucu test etmeden teslim etmem.' },
]

function FounderPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-edge">
        <div className="grid-bg pointer-events-none absolute inset-0" />
        <div className="pointer-events-none absolute -left-32 -top-32 h-[420px] w-[420px] rounded-full bg-brand/10 blur-3xl" />
        <div className="container-main relative grid items-center gap-12 py-16 sm:py-24 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <p className="eyebrow">Kurucu</p>
            <h1 className="h1 mt-4">Mehmet Altıok</h1>
            <ul className="mt-5 flex flex-wrap gap-2">
              {roles.map((r) => (
                <li key={r} className="rounded-full border border-edge bg-surface px-3.5 py-1.5 font-mono text-xs text-fg">{r}</li>
              ))}
            </ul>
            <p className="lead mt-7">
              Bilgisayar mühendisiyim. Mobil uygulama, backend ve yapay zeka alanında yazılım geliştiriyorum ve araçlar için chip tuning yapıyorum.
            </p>
            <p className="mt-4 max-w-2xl text-base leading-7 text-mute">
              Altıok Software’i, işletmelere sade ve güvenilir yazılımlar sunmak için kurdum. Yazılımı da motoru da aynı titizlikle okurum.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link to="/iletisim" className="btn-primary">İletişime geç</Link>
              <Link to="/urunler" className="btn-secondary">AutoCare’i incele</Link>
            </div>
          </div>

          <aside className="panel overflow-hidden" aria-label="Profil özeti">
            <div className="flex items-center gap-4 border-b border-edge bg-raised p-6">
              <div className="grid h-16 w-16 shrink-0 place-items-center rounded-xl bg-fg font-display text-2xl font-bold text-ink" aria-hidden="true">MA</div>
              <div>
                <p className="font-display text-lg font-semibold">Mehmet Altıok</p>
                <p className="font-mono text-xs text-mute">Altıok Software</p>
              </div>
            </div>
            <dl className="divide-y divide-edge font-mono text-xs">
              {[
                ['Meslek', 'Bilgisayar Mühendisi'],
                ['Alan', 'Yazılım · Chip Tuning'],
                ['Yığın', 'Flutter, FastAPI, PostgreSQL'],
                ['GitHub', '13Mehmet13'],
                ['Instagram', '@altioksoftware'],
              ].map(([k, v]) => (
                <div key={k} className="flex justify-between gap-4 px-6 py-4"><dt className="text-mute">{k}</dt><dd className="text-right text-fg">{v}</dd></div>
              ))}
            </dl>
          </aside>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="container-main">
          <p className="eyebrow">Ne yapıyorum</p>
          <h2 className="h2 mt-4 max-w-2xl">Üç alan, tek bakış açısı.</h2>
          <div className="mt-12 grid gap-px overflow-hidden rounded-xl border border-edge bg-edge md:grid-cols-3">
            {areas.map((a) => (
              <article key={a.tag} className="bg-ink p-7">
                <p className="font-mono text-[11px] tracking-[0.2em] text-brand">{a.tag}</p>
                <h3 className="mt-5 font-display text-xl font-semibold">{a.title}</h3>
                <p className="mt-3 text-sm leading-6 text-mute">{a.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-edge bg-surface py-16 sm:py-24">
        <div className="container-main grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="eyebrow">Yaklaşım</p>
            <h2 className="h2 mt-4">İki işte de aynı kural.</h2>
            <p className="lead mt-4">İster bir uygulama, ister bir ECU dosyası olsun, iş aynı üç adımdan geçer.</p>
          </div>
          <ol className="grid gap-px overflow-hidden rounded-xl border border-edge bg-edge sm:grid-cols-3">
            {principles.map((p, i) => (
              <li key={p.title} className="bg-ink p-6">
                <p className="font-mono text-xs text-brand">0{i + 1}</p>
                <h3 className="mt-4 font-display text-lg font-semibold">{p.title}</h3>
                <p className="mt-2 text-sm leading-6 text-mute">{p.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="container-main">
          <div className="panel flex flex-col items-start justify-between gap-6 p-8 sm:flex-row sm:items-center sm:p-10">
            <div>
              <h2 className="h2 max-w-xl">Birlikte çalışalım.</h2>
              <p className="lead mt-3">Yazılım ihtiyacınızı ya da aracınızla ilgili talebinizi yazın.</p>
            </div>
            <Link to="/iletisim" className="btn-primary shrink-0">Talep gönder</Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default FounderPage
