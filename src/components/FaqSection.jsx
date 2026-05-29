import { faqs } from '../data/homeData'

function FaqSection() {
  return (
    <section className="screen-block py-8 sm:py-12">
      <div className="container-main">
        <div className="deep-panel rounded-3xl p-8 sm:p-12">
          <h2 className="section-title">Sık Sorulan Sorular</h2>
          <p className="section-subtitle">Karar sürecinizi hızlandıracak temel soruların yanıtları.</p>

          <div className="mt-8 space-y-4">
            {faqs.map((item) => (
              <details key={item.q} className="glass-panel rounded-xl p-5">
                <summary className="cursor-pointer text-sm font-semibold text-slate-900">{item.q}</summary>
                <p className="mt-3 text-sm leading-7 text-slate-700">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default FaqSection
