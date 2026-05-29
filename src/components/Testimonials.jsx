import { testimonials } from '../data/homeData'

function Testimonials() {
  return (
    <section className="screen-block py-8 sm:py-12">
      <div className="container-main">
        <h2 className="section-title">Müşteri Yorumları</h2>
        <p className="section-subtitle">AutoCare kullanan işletmelerden geri bildirimler.</p>

        <div className="mt-8 grid gap-5 lg:grid-cols-3">
          {testimonials.map((item) => (
            <article key={item.name} className="glass-panel rounded-2xl p-6">
              <p className="text-sm leading-7 text-slate-700">"{item.quote}"</p>
              <div className="mt-5 border-t border-slate-200 pt-4">
                <p className="font-semibold text-slate-900">{item.name}</p>
                <p className="text-sm text-slate-700">{item.role} - {item.company}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
