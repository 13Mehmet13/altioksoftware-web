import { showcaseTabs } from '../data/homeData'

function ProductShowcase() {
  return (
    <section className="screen-block">
      <div className="container-main">
        <div className="deep-panel rounded-3xl p-8 sm:p-12">
          <p className="text-xs uppercase tracking-[0.16em] text-sky-700">Ürün Deneyimi</p>
          <h2 className="section-title mt-3">AutoCare Ekranlarıyla Uçtan Uca Yönetim</h2>
          <p className="section-subtitle">Gerçek operasyon akışına uygun ekranlar sayesinde ekipler daha hızlı çalışır, süreçler daha ölçülebilir hale gelir.</p>

          <div className="mt-8 grid gap-5 lg:grid-cols-3">
            {showcaseTabs.map((tab) => (
              <article key={tab.title} className="glass-panel rounded-2xl p-6">
                <h3 className="text-lg font-semibold text-slate-900">{tab.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-700">{tab.text}</p>
                <ul className="mt-4 space-y-2 text-sm text-slate-700">
                  {tab.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-sky-500" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProductShowcase
