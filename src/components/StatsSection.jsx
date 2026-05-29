import { stats } from '../data/homeData'

function StatsSection() {
  return (
    <section className="screen-block py-8 sm:py-12">
      <div className="container-main grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((item) => (
          <article key={item.label} className="glass-panel rounded-2xl p-6 text-center">
            <p className="text-3xl font-bold text-sky-600">{item.value}</p>
            <p className="mt-2 text-sm text-slate-700">{item.label}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default StatsSection
