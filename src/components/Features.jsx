import { featureCards } from '../data/siteData'

function Features() {
  return (
    <section id="ozellikler" className="screen-block flex items-center">
      <div className="container-main">
        <h2 className="section-title reveal">Özellik Mimarisi</h2>
        <p className="section-subtitle reveal">AutoCare, servis işletmeleri için tasarlanmış net ve uygulanabilir modüller sunar.</p>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {featureCards.map((card, index) => (
            <article
              key={card.title}
              className="glass-panel reveal rounded-2xl p-6 transition duration-500 hover:-translate-y-1 hover:border-sky-200/30"
              style={{ animationDelay: `${index * 0.07}s` }}
            >
              <h3 className="text-lg font-semibold text-slate-900">{card.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-700">{card.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
